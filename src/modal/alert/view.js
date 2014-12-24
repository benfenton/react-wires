var Radio = require('backbone.radio');
var View = require('src/common/view');
var Model = require('src/common/model');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,

  initialize: function() {
    this.model = new Model(this.options);
    Radio.request('modal', 'open', this);
  },

  events: {
    'click .btn-primary' : 'confirm',
    'click .close'       : 'cancel'
  },

  confirm: function() {
    var self = this;
    Radio.request('modal', 'close').then(function() {
      self.trigger('confirm');
    });
  },

  cancel: function() {
    var self = this;
    Radio.request('modal', 'close').then(function() {
      self.trigger('cancel');
    });
  }
});
