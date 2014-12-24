var Collection = require('src/common/collection');
var Model = require('./model');

var BookCollection = Collection.extend({
  url: '/api/rebooks',
  model: Model
});

if(window.BookCollection === undefined) {

	window.BookCollection = BookCollection;
}

module.exports = BookCollection