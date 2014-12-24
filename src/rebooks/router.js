var Router = require('src/common/router');
var Collection = require('./collection');
var IndexRoute = require('./index/route');
var Radio = require('backbone.radio');

module.exports = Router.extend({
  initialize: function(options) {
    this.collection = new Collection();
    window.col = this.collection;
  },

  onBeforeEnter: function() {
    Radio.command('header', 'activate', { path: 'rebooks' });
  },

  routes: {
    'rebooks': 'index'
  },

  index: function() {
    return new IndexRoute({
      collection: this.collection
    });
  }
});
