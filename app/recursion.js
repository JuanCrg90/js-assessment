exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirs = [];

    processDir(data);

    function processDir(dir) {
      var files = dir.files;

      dirs.push(dir.dir);

      for (var i = 0; i < files.length; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      dirs.pop();
    }

    return listOfFiles;
  },

  permute: function(arr) {
    var temp = [];
    var answer = [];

    function logResult() {
      answer.push(temp.slice());
    }

    function doIt() {
      var i;
      var len;
      var item;

      for (i = 0, len = arr.length; i < len; i++) {
        item = arr.splice(i, 1)[0];
        temp.push(item);

        if (arr.length) {
          doIt();
        } else {
          logResult();
        }

        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }
    return doIt();
  },

  fibonacci: function(n) {
    if (n < 2) return n;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function(n) {
    var sets = [];
    var getParentheses = function (left, right, current) {
      if (left == 0 && right == 0)  sets.push(current);
      if (left > 0)
        getParentheses(left - 1, right + 1, current + '(');
      if (right > 0)
        getParentheses(left, right - 1, current + ')');
      return sets;
    };
    return getParentheses(n, 0, '');
  }
};
