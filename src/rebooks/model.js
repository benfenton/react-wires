var Model = require('src/common/model');

var BookModel = Model.extend({
  urlRoot: '/api/rebooks',

  isActive: function() {
    return this.collection.active === this;
  }
});

if(window.BookModel === undefined) {
	
	window.BookModel = BookModel;
} 

module.exports = BookModel;