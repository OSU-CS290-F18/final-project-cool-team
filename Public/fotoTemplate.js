(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['foto'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <span class=\"image-tags\">#"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"image-comment\"><i>\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\"</i></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"image\">\n  <div class=\"image-contents\">\n    <a href="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "><img src="
    + alias4(((helper = (helper = helpers.imgURL || (depth0 != null ? depth0.imgURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgURL","hash":{},"data":data}) : helper)))
    + " alt="
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "></a>\n    <div class=\"image-info-container\">\n      <a href=\"#\" class=\"image-title\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</a>\n        <span class=\"image-date\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span>\n      <div class=\"image-info-container-tags-dates\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n      <div id=\"image-comments\">\n        Comments:\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n      <div id=\"add-comment\">\n        <label for=\"add-comment-input\" class=\"comment-label\">Comment</label>\n        <input type=\"text\" name=\"add-comment-label\" id=\"add-comment-input\" class=\"comment-label\">\n        <button id= \"comment-button\" class=\"action-button\">Comment</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();