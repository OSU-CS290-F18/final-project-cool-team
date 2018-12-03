(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['foto'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"image\">\n  <div class=\"image-contents\">\n    <a href="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "><img src="
    + alias4(((helper = (helper = helpers.imgURL || (depth0 != null ? depth0.imgURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgURL","hash":{},"data":data}) : helper)))
    + " alt="
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "></a>\n    <div class=\"image-info-container\">\n      <a href=\"#\" class=\"image-title\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</a>\n      <div class=\"image-info-container-tags-dates\">\n        <span class=\"image-tags\">#"
    + alias4(((helper = (helper = helpers.tag1 || (depth0 != null ? depth0.tag1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag1","hash":{},"data":data}) : helper)))
    + " #"
    + alias4(((helper = (helper = helpers.tag2 || (depth0 != null ? depth0.tag2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag2","hash":{},"data":data}) : helper)))
    + " #"
    + alias4(((helper = (helper = helpers.tag3 || (depth0 != null ? depth0.tag3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag3","hash":{},"data":data}) : helper)))
    + "</span>\n        <span class=\"image-date\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span>\n      </div>\n      <div id=\"image-comments\">\n        Comments:\n        <div class=\"image-comment\">"
    + alias4(((helper = (helper = helpers.comment1 || (depth0 != null ? depth0.comment1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comment1","hash":{},"data":data}) : helper)))
    + "</div>\n        <div class=\"image-comment\">"
    + alias4(((helper = (helper = helpers.comment2 || (depth0 != null ? depth0.comment2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comment2","hash":{},"data":data}) : helper)))
    + "</div>\n      </div>\n      <div id=\"add-comment\">\n        <label for=\"add-comment-input\" class=\"comment-label\">Comment</label>\n        <input type=\"text\" name=\"add-comment-label\" id=\"add-comment-input\" class=\"comment-label\">\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();