exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    return function run() {
      let timeOut;
      console.log(start++);

      if (start <= end) {
        timeOut = setTimeout(run, 100);
      }

      return {
        cancel() {
          clearTimeout(timeOut);
        }
      };
    }();
  }
};
