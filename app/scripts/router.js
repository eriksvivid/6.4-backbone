var $ = require('jquery');
var Backbone = require('backbone');

var views = require('./views/b');
var FormCollection = require('./models/b');



var Router = Backbone.Router.extend({

routes: {
  "help": "help",
},

help: function(){
    console.log('Calling 911...');
},

initialize: function(){
  var bCollections = new FormCollection();
  var bForm = new views.bView({collection: FormCollection});
  var bFormList = new views.FormListView({collection: FormCollection});

  $('#app')
    .html(bForm.render().el)
    .append(bFormList.render().el);
}
});

module.exports = new Router();
