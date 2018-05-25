exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(resolve => {
      setTimeout(() => resolve(value), 250);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise(resolve => {
      $.get(url, (data) => {
        const people = data.people.map(person => person.name).sort();
        resolve(people);
      });
    });
  }
};
