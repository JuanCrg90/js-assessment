exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
   return arr.indexOf(item); 
  },

  sum: function(arr) {
    return arr.reduce((acc, val) => { return acc + val; });
  },

  remove: function(arr, item) {
    return arr.filter(element => { return element !== item })

  },

  removeWithoutCopy: function(arr, item) {
    while(arr.indexOf(item) !== -1) {
      var index = arr.indexOf(item);
      arr.splice(index, 1);
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    arr.forEach(element => { if(element === item) count++; });
    return count;
  },

  duplicates: function(arr) {
    var duplicates =  arr.filter((element, index) => index !== arr.indexOf(element));
    return [...new Set(duplicates)].sort();
  },

  square: function(arr) {
    return arr.map(element => element * element);

  },

  findAllOccurrences: function(arr, target) {
    var indexs = [];
    arr.forEach((element, index) => { if(element === target) indexs.push(index) });
    return indexs;
  }
};
