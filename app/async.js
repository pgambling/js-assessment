if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	return $.Deferred().resolve(value);
    },

    manipulateRemoteData : function(url) {
    	var deferred = $.Deferred();
    	$.get(url, function (data) {
    		var result = $.map(data.people, function (person) {
    			return person.name;
    		});
    		deferred.resolve(result.sort());
    	});
    	return deferred;
    }
  };
});
