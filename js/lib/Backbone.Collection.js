(function(Backbone){

  var collectionPrototype = _.clone(Backbone.Collection.prototype);

  Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._initState(options);
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  Backbone.Collection.extend = Backbone.Model.extend;

  _.extend(Backbone.Collection.prototype, collectionPrototype, {
    fetch: function(options = {}) {
      options.data = Object.assign({}, this.state.pick('count', 'sort'), options.data);
      options.data.offset = (this.state.get('page') - 1) * this.state.get('count');
      return collectionPrototype.fetch.call(this, options);
    },
    fetchFields: function() {
      var url = _.result(this, 'url');
      console.assert(url, 'A "url" property or function must be specified');
      return $.getJSON(url + '/fields')
          .done(function(resp) {
            this.state.set(this.state.parse({ fields: resp.data }));
          }.bind(this))
          .fail(function(err) {
            console.error('Failed fetch collection fields', err);
          });
    },
    parse: function(response) {
      var list = [];
      if(_.isArray(response)) {
        list = response;
      } else {
        _.isArray(response.data) && (list = response.data);
        _.isObject(response.meta) && this.state.set(response.meta);
      }
      return list;
    },
    _initState: function (options) {
      options || (options = {});
      this.state = new CollectionStateModel(this.state);
      this.listenTo(
          this.state
          , 'change:page change:count change:sort'
          , _.debounce(this.fetch.bind(this, {}), 160)
      );
      return this;
    }
  });


  var CollectionStateModel = Backbone.Model.extend({
    defaults: {
      fields: [],
      page: 1,
      count: 20,
      sort: '-id',
      sortOrder: 'desc',
      sortKey: 'id',
      total: 0
    },
    initialize: function() {
      this.on('change:sortKey change:sortOrder', function() {
        var order = this.get('sortOrder');
        var sort = this.get('sortKey');
        if (order == 'desc') sort = '-' + sort;
        this.set('sort', sort);
      });
      this.on('change:sort', function(model, sort) {
        var attrs = {
          sortKey: sort.indexOf('-') === 0 ? sort.substring(1) : sort,
          sortOrder: sort.indexOf('-') === 0 ? 'desc' : 'asc'
        };
        this.set(attrs, { silent: true });
      });
    },
    parse: function(data) {
      if(data.fields) {
        for(var key in data.fields) {
          var field = data.fields[key];
          field.name = field.name || field.comment || key;
        }
      }
      return data;
    }
  });

}(Backbone));