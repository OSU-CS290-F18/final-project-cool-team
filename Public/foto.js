(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['foto'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"image\">\r\n  <div class=\"image-contents\">\r\n    <a href=\"post.html\"><img src="
    + alias4(((helper = (helper = helpers.imgURL || (depth0 != null ? depth0.imgURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgURL","hash":{},"data":data}) : helper)))
    + " alt="
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "></a>\r\n    <div class=\"image-info-container\">\r\n      <a href=\"#\" class=\"image-title\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</a>\r\n      <div class=\"image-info-container-tags-dates\">\r\n        <span class=\"image-tags\">#"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0["1"] : depth0)) != null ? stack1.tag : stack1), depth0))
    + " #"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0["2"] : depth0)) != null ? stack1.tag : stack1), depth0))
    + " #"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0["3"] : depth0)) != null ? stack1.tag : stack1), depth0))
    + "</span>\r\n        <span class=\"image-date\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span>\r\n      </div>\r\n      <div id=\"image-comments\">\r\n        Comments:\r\n        <div class=\"image-comment\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0["1"] : depth0)) != null ? stack1.comment : stack1), depth0))
    + "</div>\r\n        <div class=\"image-comment\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0["2"] : depth0)) != null ? stack1.comment : stack1), depth0))
    + "</div>\r\n      </div>\r\n      <div id=\"add-comment\">\r\n        <label for=\"add-comment-input\" class=\"comment-label\">Comment</label>\r\n        <input type=\"text\" name=\"add-comment-label\" id=\"add-comment-input\" class=\"comment-label\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});
})();