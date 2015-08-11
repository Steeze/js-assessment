exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
      return arr.indexOf(item);
  },

  sum : function(arr) {
      var count = 0;

      arr.forEach(function(item, index, arr){
        count = count + item;
      });

      return count;
  },

  remove : function(arr, item) {

      function isNotEqualTo(value){
          return item !== value;
      }

      return arr.filter(isNotEqualTo);

  },

  removeWithoutCopy : function(arr, item) {

      var newArr = [];
      for(var i = 0, len = arr.length; i < len; i++){

          if(arr[i] !== item) {
             newArr[i] = arr[i];
         }
      }
      console.log(newArr);

      return newArr;
  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
