(function (factory) {
    if (typeof define === 'function' && define.amd) {
		define(factory);
	} else {
		window.UI = factory();
	}
}(function () {
	
	// Global handlers of DOM events
	var _ons = {
		'window': {
			'resize': function(e) {
				
				return;
			}
		}
	};
	
	window.addEventListener('resize', _ons.window.resize, false);
	
	var _space = {
		width: 0,
		height: 0,
		screen: 'desktop'
	};
	
	
	return {
		_helpers: {
			extend: function(obj) {
				[].slice.call(arguments, 1).forEach(function(src) {
					if(src)
						for (var prop in src)
							obj[prop] = src[prop];
				});
				return obj;
			},
			findElement: function(startElement, selector) {
				var result, parent;
				var isClassName = this.isClassName(selector);
				
				if(isClassName)
					selector = selector.replace('.', '');
				
				function _getElement(parent, selector) {
					return isClassName ?
							parent.getElementsByClassName(selector)[0] :
							parent.querySelector(selector);
				}
		
				if(!(startElement instanceof HTMLElement))
					console.error('Not specified the initial element search.');
				
				
				parent = startElement;
				while (null == result && parent instanceof Element) {
					result = _getElement(parent, selector);
					parent = parent.parentNode;
				}
				
				return result;
			},
			getAttributeObject: function(el, attr_name) {
				var data;
				
				if(!el.hasAttribute(attr_name))
					console.error('The element has no attribute "' + attr_name + '"');
				
				data = el.getAttribute(attr_name);
				data = data.replace(/'/g, '"');
				data = data.replace(/([a-zA-Z0-9]+):/g, function(match, group, i) { 
					var count = data.substring(0, i).match(/"/g);
					return (!count || count.length % 2 === 0 ? '"' + group + '":' : group + ':');
				});
				data = JSON.parse(data);
				
				return data;
			},
			isClassName: function(str) {
				return /^\.[\S]+$/.test(str);
			}
		},
		space: _space
	};
}));