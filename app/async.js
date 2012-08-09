if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        var deferred = $.Deferred();
        // Allow async to return and finish the test before
        // resolving the deferred
        setTimeout(function () {
            deferred.resolve(value);
        }, 0); 
    	return deferred;
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
