

var allPosts = [];

document.getElementById('newpost-button').onclick = function(){show_newpost()};
document.getElementById('cancel-button').onclick = function(){hide_newpost()};
document.getElementById('add-tag-button').onclick = function(){show_tag_maker()};
document.getElementById('cancel-newtag-button').onclick = function(){hide_tag_maker()};
document.getElementById('filter-update-button').onclick = function(){Search()};
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

function insertTags(tags){

	var tagHTML = Handlebars.templates.tag({
		tags:tags
	}); 
	var postContainer = document.getElementById('tags1'); 
	postContainer.insertAdjacentHTML('beforeend', tagHTML); 

}

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();

var description = document.getElementById('newpost-text-imgURL');
var imgURL = document.getElementById('newpost-text-name');
var tags = document.getElementById('tags');
var date = "" + month + "/" + day + "/" + year;
var comments = [];


var newPost = document.getElementById('post-button');
newPost.addEventListener('click', function() {
	if (description && description.value && imgURL && imgURL.value) {
		insertNewFoto(
			3 + allPosts.length,
			document.getElementById('newpost-text-imgURL').value,
			document.getElementById('newpost-text-name').value,
			document.getElementById('tags').value,
			"" + month + "/" + day + "/" + year,
			[]
		);
		document.getElementById('newpost-text-name').value = "";
		document.getElementById('newpost-text-imgURL').value = "";
		//uncheck tags
	} else {
		alert("You must enter the description and url fields to make a post");
	}

allPosts.push({
	id: 3 + allPosts.length,
	description: description,
	imgURL: imgURL,
	tags: tags,
	date: date,
	comments: comments
});

});

var commentContainer = document.getElementById('image-comments');
var commentInput = document.getElementById('add-comment-input');
var commentButton = document.getElementById('comment-button');
commentButton.addEventListener('click', function() {
	if (commentInput && commentInput.value) {
		commentContainer.insertAdjacentHTML('beforeend', '<div class="image-comment"><i>"' + commentInput.value + '"</i></div>');
		document.getElementById('add-comment-input').value = "";
	} else {
		alert("You must enter a comment before adding one!")
	}
});

function Search(){ 
	var images = document.getElementById('images').children; 
	for(var i = 0; i < images.length; i++){
		var test = true; 
		var title = images[i].getElementById('image-title').innerHTML.toUpperCase();
		console.log(title);
		if(document.getElementById('filter-text') != ''){
			if(document.getElementById('filter-city').value.toUpperCase() !== title.toUpperCase()){
				test = false; 
		
			}
		}
	
		if(test = false){
			posts[i].display = 'none';
		}
	}
}
