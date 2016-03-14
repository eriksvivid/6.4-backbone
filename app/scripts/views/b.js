var $ = require('jquery');
var Backbone = require('backbone');

var bTemplate = require('../../templates/bform.hbs');
var bTemplateView = require('../../templates/bformview.hbs')

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};


var bView = Backbone.View.extend({
  tagName: "form",
  template: bTemplate,
  events: {
    'click button': 'submit'
  },
  submit: function(e){
    e.preventDefault();
    var formData = this.$el.serializeObject();
    this.collection.add(formData);
  },
  render: function(){
    this.$el.html(this.template());
  }
  });

  var FormListView = Backbone.View.extend({
  tagName: "ul",
  initialize: function(){
    this.listenTo(this.collection, "add", this.renderChild);
  },
  renderChild: function(forms){
    var view = new FormItemView({model: bModel});
    this.$el.append(view.render().el);
  },
  render: function(){
    return this;
  }
});

var FormItemView = Backbone.View.extend({
  tagName: "li",
  template: bTemplateView,
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = {
  'bView': bView,
  'FormListView': FormListView,
  'FormItemView': FormItemView
}
