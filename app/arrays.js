if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        var index = arr.length;
        while(index--) {
            sum += arr[index];
        }
        return sum;
    },

    remove : function(arr, item) {
        var index = arr.length;
        while(index--) {
            if(arr[index] === item) {
                arr.splice(index, 1);
            }
        }

        return arr;
    },
    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        var index = arr.length;
        while(index--) {
            if(arr[index] === item) {
                count++;
            }
        }

        return count;
    },

    duplicates : function(arr) {
        var itemCounts = {};
        var index = arr.length;
        while(index--) {
            var item = arr[index];
            if(itemCounts.hasOwnProperty(item)) {
                itemCounts[item]++;
            }
            else {
                itemCounts[item] = 1;
            }
        }

        var dupes = [];
        for(item in itemCounts) {
            if(itemCounts[item] > 1) {
                dupes.push(item);
            }
        }

        return dupes;
    },

    square : function(arr) {
        var squares = [];
        var length = arr.length, index;
        for(index = 0; index < length; index+=1) {
            squares.push(Math.pow(arr[index], 2));
        }

        return squares;
    },

    findAllOccurrences : function(arr, target) {
        var indices = [];
        var index, length = arr.length;
        for(index = 0; index < length; index++) {
            if(arr[index] === target) {
                indices.push(index);
            }
        }
        return indices;
    }
  };
});
