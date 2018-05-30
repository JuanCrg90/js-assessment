exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit-1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    function prependZeros(bin) {
      if(bin.length < 8) {
        bin = '0' + bin;
        prependZeros(bin)
      }

      return bin;
    }

    const str = num + '';
    const bin  = (+str).toString(2);

    return prependZeros(bin);

  },

  multiply: function(a, b) {
    var commonMultiplier = 1000000;

    a *= commonMultiplier;
    b *= commonMultiplier;

    return (a * b) / (commonMultiplier * commonMultiplier);
  }
};
