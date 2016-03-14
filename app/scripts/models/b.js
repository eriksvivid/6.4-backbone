var $ = require('jquery');
var Backbone = require('backbone');

var bModel = Backbone.Model.extend({
});

module.exports = Backbone.Collection.extend({
  model: bModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/forms'
  
});
