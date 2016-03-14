var $ = require('jquery');
var Backbone = require('backbone');

var aModel = Backbone.Model.extend({

});

module.exports = Backbone.Collection.extend({
  model: aModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/blog-post'
});
