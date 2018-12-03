

var allPosts = [];

document.getElementById('newpost-button').onclick = function(){show_newpost()};
document.getElementById('cancel-button').onclick = function(){hide_newpost()};
document.getElementById('add-tag-button').onclick = function(){show_tag_maker()};
document.getElementById('cancel-newtag-button').onclick = function(){hide_tag_maker()};

function show_newpost(){
	document.getElementById('newpost-button').style.visibility = 'hidden';
	document.getElementById('newpost-container').style.visibility = 'visible';
	document.getElementById('newpost-container').style.display = 'block';
	document.getElementById('post-button').style.visibility = 'visible';
	document.getElementById('post-button').style.display = 'block';
}
function hide_newpost(){
	document.getElementById('newpost-button').style.visibility = 'visible';
	document.getElementById('newpost-container').style.visibility = 'hidden';
	document.getElementById('newpost-button').style.display = 'block';
	document.getElementById('post-button').style.visibility = 'hidden';
	document.getElementById('tag-add').style.visibility = 'hidden';
}
function show_tag_maker(){
	document.getElementById('tag-add').style.visibility = 'visible';
	document.getElementById('tag-add').style.display = 'block';
	document.getElementById('post-button').style.visibility = 'hidden';
}
function hide_tag_maker(){
	document.getElementById('post-button').style.visibility = 'visible';
	document.getElementById('post-button').style.display = 'block';
	document.getElementById('tag-add').style.visibility = 'hidden';
}


function filterFunction() {
    document.getElementById("myfilter").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.filter-button')) {

    var filters = document.getElementsByClassName("filter-content");
    var i;
    for (i = 0; i < filters.length; i++) {
      var openfilter = filters[i];
      if (openfilter.classList.contains('show')) {
        openfilter.classList.remove('show');
      }
    }
  }
}

function insertNewFoto(id, imgURL, description, tags, date, comments) {
	var postHTML = Handlebars.templates.foto({
		id: id,
		imgURL: imgURL,
		description: description,
		tags: tags,
		date: date,
		comments: comments
	});

	var postContainer = document.getElementById('images');
	postContainer.insertAdjacentHTML('beforeend', postHTML);
}

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();

var description = document.getElementById('newpost-text-imgURL').value;
var imgURL = document.getElementById('newpost-text-name').value;
var tags = document.getElementById('tags').value;
var date = "" + month + "/" + day + "/" + year;
var comments = [];


var newPost = document.getElementById('post-button');
newPost.addEventListener('click', insertNewFoto(
	3 + allPosts.length,
	imgURL,
	description,
	tags,
	date,
	comments
));

allPosts.push({
	id: 3 + allPosts.length,
	description: description,
	imgURL: imgURL,
	tags: tags,
	date: date,
	comments: comments

});

var commentContainer = document.getElementById('image-comments');
var commentInput = document.getElementById('add-comment-input');
var commentButton = document.getElementById('comment-button');
commentButton.addEventListener('click', function() {

	commentContainer.insertAdjacentHTML('beforeend', '<div class="image-comment><i> ' + commentInput + '</i></div>');

})
