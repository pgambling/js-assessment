if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
    	var retArray = [];
    	for(var prop in obj) {
    		if(obj.hasOwnProperty(prop)) {
    			retArray.push(prop + ': ' + obj[prop]);
    		}
    	}
 		return retArray;
    }
  };
});
