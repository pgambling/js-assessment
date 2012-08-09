if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(str2) {
            return str + ', ' + str2;
        }
    },

    makeClosures : function(arr, fn) {
        var closures = [];
        var index, length = arr.length;
        for(index = 0; index < length; index++) {
            (function () {
                var value = arr[index];
                closures.push(function () {
                    return fn(value);
                });
            }());
        }
        return closures;
    },

    partial : function(fn, str1, str2) {
        return function (str3) {
            return fn(str1, str2, str3);
        };
    },

    useArguments : function() {
        var sum = 0;
        var index = arguments.length;
        while(index--) {
            sum += arguments[index];
        }
        return sum;
    },

    callIt : function(fn) {
        fn.apply(null, Array.prototype.slice.call(arguments, 1));
    },

    curryIt : function(fn) {
        var outerArgs = Array.prototype.slice.call(arguments, 1);
        return function () {
            var innerArgs = Array.prototype.slice.call(arguments);
            return fn.apply(null, outerArgs.concat(innerArgs));
        };
    }
  };
});
