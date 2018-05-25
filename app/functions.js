exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(suffix) {
      return `${str}, ${suffix}`;
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(element => {
      return (element => {
        return () => { return fn(element); }
      })(element)
    });
  },

  partial: function(fn, str1, str2) {
    return str3 => {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    return [...arguments].reduce((a, b) => a + b);
  },

  callIt: function(fn) {
    return fn.apply(fn, Array.prototype.slice.call(arguments, 1));
  },

  partialUsingArguments: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function () {
      let mArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, mArgs);
    }
  },

  curryIt: function(fn) {
    function applyArguments(_fn, args) {
      return _fn.apply(null, args);
    }

    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        let allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;
        if (allArgumentsProvided) {
          return applyArguments(fn, accumulatedArguments);
        }

        return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
      };
    }
    return getArgumentAccumulator([], fn.length);
  }
};
