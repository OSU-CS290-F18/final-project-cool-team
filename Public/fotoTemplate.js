(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['foto'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <span class=\"image-tags\">#"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"image-comment\"><i>\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\"</i></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"image\">\r\n  <div class=\"image-contents\">\r\n    <a href="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "><img src="
    + alias4(((helper = (helper = helpers.imgURL || (depth0 != null ? depth0.imgURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgURL","hash":{},"data":data}) : helper)))
    + " alt="
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "></a>\r\n    <div class=\"image-info-container\">\r\n      <a href=\"#\" class=\"image-title\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <span class=\"image-date\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</a>\r\n      <div class=\"image-info-container-tags-dates\">\r\n"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span>\r\n      </div>\r\n      <div id=\"image-comments\">\r\n        Comments:\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n      <div id=\"add-comment\">\r\n        <label for=\"add-comment-input\" class=\"comment-label\">Comment</label>\r\n        <input type=\"text\" name=\"add-comment-label\" id=\"add-comment-input\" class=\"comment-label\">\r\n        <button id= \"comment-button\" class=\"action-button\">Comment</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();