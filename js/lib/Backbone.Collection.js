(function(_, Backbone){

  /* ========================================================================
   Backbone.Collection
   ========================================================================== */

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

  Object.assign(Backbone.Collection.prototype, collectionPrototype, {
    fetch: function (options = {}) {
      options.data = Object.assign({}, this.state.pick('count', 'sort'), options.data);
      options.data.offset = (this.state.get('page') - 1) * this.state.get('count');
      return collectionPrototype.fetch.call(this, options);
    },
    fetchFields: function () {
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
    parse: function (response = { data: null, meta: null }) {
      var list = [];
      if(_.isArray(response)) {
        list = response;
      } else {
        _.isArray(response.data) && (list = response.data);
        _.isObject(response.meta) && this.state.set(response.meta);
      }
      return list;
    },
    _initState: function (options = {}) {
      this.state = new CollectionStateModel(this.state);
      this.listenTo(
          this.state
          , 'change:page change:count change:sort'
          , _.debounce(() => this.fetch(), 160)
      );
      return this;
    }
  });

  /* ========================================================================
   CollectionStateModel
   ========================================================================== */

  var hns = {
    change: {
      sort: function(model, sort) {
        var attrs = _.pick(_.result(this, 'defaults'), 'sort', '_sort_key', '_sort_order');
        if(sort) {
          attrs = {
            _sort_key: sort.indexOf('-') === 0 ? sort.substring(1) : sort,
            _sort_order: sort.indexOf('-') === 0 ? 'descending' : 'ascending'
          };
        }
        this.set(attrs, { silent: true });
        return;
      },
      sortProps: function() {
        var order = this.get('_sort_order');
        var sort = this.get('_sort_key');
        if (order == 'descending') sort = '-' + sort;
        this.set('sort', sort);
        return;
      }
    }
  };

  var CollectionStateModel = Backbone.Model.extend({
    name: 'CollectionStateModel',
    defaults: {
      _sort_key: 'id',
      _sort_order: 'descending',

      fields: [],
      exclude_fields: ['creted', 'updated'], // <-- TODO
      page: 1,
      count: 20,
      sort: '-id',
      total: 0
    },
    initialize: function(attrs = {}) {
      this.on('change:_sort_key change:_sort_order', hns.change.sortProps);
      this.on('change:sort', hns.change.sort);
      if(attrs.sort) hns.change.sort.call(this, this, attrs.sort);
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

}(_, Backbone));