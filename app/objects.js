exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.apply(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    let properties = [];
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        properties.push(`${prop}: ${obj[prop]}`);
      }
    }
    return properties;
  }
};
