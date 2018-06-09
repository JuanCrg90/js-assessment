exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var regex = RegExp(/\d+/);
    return regex.test(str);
  },

  containsRepeatingLetter: function(str) {
    var regex = RegExp(/([a-zA-Z]).*?\1/);
    return regex.test(str);
  },

  endsWithVowel: function(str) {
    var regex = RegExp(/^(\w+\ )*\w+[aeiouAEIOU]$/);
    return regex.test(str);
  },

  captureThreeNumbers: function(str) {
    var matches = (/\d{3}/).exec(str);
    return matches ? matches[0] : false;
  },

  matchesPattern: function(str) {
    var regex = RegExp(/^\d{3}-\d{3}-\d{4}$/);
    return regex.test(str);
  },

  isUSD: function(str) {
    var regex = RegExp(/^\$\d{1,3},?(\d{3},?)*(\.\d{2})?$/);
    return regex.test(str);
  }
};
