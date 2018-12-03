var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
postData = require('./postData');
var port= process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res, next) {
    res.status(200).render('home',{
		posts: postData,
    tags: postData[0].tags
	});
});

app.get('/:id', function(req, res, next) {
    var id = req.params.id;
    var index = findWithAttr(postData, 'id', id);
    if (postData[id]) {
      res.status(200).render('partials/foto', {
        id: postData[index].id,
        description: postData[index].description,
        imgURL: postData[index].imgURL,
        tags: postData[index].tags,
        comments: postData[index].comments,
        date: postData[index].date
  	  });

    } else {
      next();
    }
});

app.get('*', function (req, res, next) {
  res.status(404).render('404');
});

app.listen(port, function (err) {
    if(err) {
      throw err;
    }
  console.log("== Server is listening on port", port);
});

function findWithAttr(jsonArray, attr, value) {
  for (var i = 0; i < postData.length; i++) {
    if (postData[i][attr] == value) {
      return i
    }
  }
  return -1;
}
