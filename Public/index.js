

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
    for (var i = 0; i < filters.length; i++) {
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

	var Request = new XMLHttpRequest();
	Request.open('POST', '/add');
	Request.send(postHTML);
	var postRequest = new XMLHttpRequest();
	var requestURL = '/addpost';
	postRequest.open('POST', requestURL);
	console.log(id);
	var requestBody = JSON.stringify({
		id: id,
		imgURL: imgURL,
		description: description,
		tags: tags,
		date: date,
		comments: comments
	});
	postRequest.setRequestHeader('Content-Type', 'application/json');
	postRequest.send(requestBody);


}

// function insertTags(tags){
//
// 	var tagHTML = Handlebars.templates.tag({
// 		tags: tags
// 	});
// 	var tagsContainer = document.getElementById('tags');
// 	tagsContainer.insertAdjacentHTML('beforeend', tagHTML);
//
// }

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();


var tagsArray = [];
// var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
//
// for (var i = 0; i < checkboxes.length; i++) {
// 	if (checkboxes[i].type == 'checkbox' && checkboxes[i].checked == true) {
// 		console.log("====----" + checkboxes[i]);
// 		tagsArray.push(checkboxes[i].name);
// 	}
// }
console.log("=====" + tagsArray);

var description = document.getElementById('newpost-text-imgURL');
var imgURL = document.getElementById('newpost-text-name');
var date = "" + month + "/" + day + "/" + year;
var comments = [];


var newPost = document.getElementById('post-button');
newPost.addEventListener('click', function() {
	var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].type == 'checkbox' && checkboxes[i].checked == true) {
			console.log("====----" + checkboxes[i]);
			tagsArray.push(checkboxes[i].name);
		}
	}
	if (description && description.value && imgURL && imgURL.value) {
		insertNewFoto(
			3 + allPosts.length,
			document.getElementById('newpost-text-imgURL').value,
			document.getElementById('newpost-text-name').value,
			tagsArray,
			"" + month + "/" + day + "/" + year,
			[]
		);
		document.getElementById('newpost-text-name').value = "";
		document.getElementById('newpost-text-imgURL').value = "";
		tagsArray = [];
		for (var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].checked = false;
		}
		//uncheck tags

	} else {
		alert("You must enter the description and url fields to make a post");
	}

	allPosts.push({
		id: 2 + allPosts.length,
		description: description,
		imgURL: imgURL,
		tags: tagsArray,
		date: date,
		comments: comments
	});

});

function find_id(comment){


}


var commentInput = document.getElementById('add-comment-input');
var commentButton = document.getElementById('comment-button');
var image = document.querySelectorAll('.image');
image.forEach(function(singleImage) {
	singleImage.addEventListener('click', function() {
		var commentContainer = singleImage.firstChild.nextSibling.childNodes[0].nextSibling.nextSibling.nextSibling.children[3];
		var addCommentContainer = singleImage.firstChild.nextSibling.childNodes[0].nextSibling.nextSibling.nextSibling.children[4];
		var commentInput = singleImage.firstChild.nextSibling.childNodes[0].nextSibling.nextSibling.nextSibling.children[4].children[0];
		var commentButton = singleImage.firstChild.nextSibling.childNodes[0].nextSibling.nextSibling.nextSibling.children[4].children[1];
		commentButton.addEventListener('click', function() {
			if (commentInput && commentInput.value) {
				commentContainer.insertAdjacentHTML('beforeend', '<div class="image-comment"><i>"' + commentInput.value + '"</i></div>');
				var Request = new XMLHttpRequest();
				Request.open('POST', '/addcomment');
				console.log(singleImage.querySelector('a').getAttribute('href'));
				var postRequest = new XMLHttpRequest();
				var requestURL = '/addcomment';
				postRequest.open('POST', requestURL);
				var comment = commentInput.value
				console.log(comment);
				var requestBody = JSON.stringify({
				comment: comment,
				id : singleImage.querySelector('a').getAttribute('href')
				});
				postRequest.setRequestHeader('Content-Type', 'application/json');
				postRequest.send(requestBody);
				commentInput.value = "";
			} else {
				//alert("");
			}


		});


	});
});


function Search(){
	var posts = document.getElementById('images').children;
	var tags = document.getElementById("tags-left").children;
	var tag = [];
	for(var b = 0; b < tags.length; b++){
		var checkboxx = tags[b].querySelector('input[type=checkbox]')
		if(checkboxx.checked == true){
				console.log('here1');
				console.log(checkboxx.innerHTML);
				var tag_val = tags[b].querySelector('label[for]').innerHTML;
				console.log(tag_val);
				tag.push(tag_val);
		}
	}
	var stringsOfTagsInPosts = "";
	for(var i = 0; i < posts.length; i++){
		var test = true;
		var title = posts[i].querySelector('.image-title').innerHTML.toUpperCase();
		var date = posts[i].querySelector('.image-date').innerHTML;


		if(document.getElementById('filter-text').value != ''){
			var filter = document.getElementById('filter-text').value.toUpperCase();
			console.log(filter);
			console.log(title);
			if (!title.includes(filter)) {
				//document.getElementById('filter-text').value.toUpperCase() != title.toUpperCase()){
				test = false;

			}
		}
		if(document.getElementById('filter-date').value != ''){
			if(document.getElementById('filter-date').value != date){
				test = false;
			}
		}
		var stringsOfTagsInPosts = "";
		var tagsOfPost = posts[i].querySelector('#image-tags');
		console.log(tagsOfPost);
		console.log(tagsOfPost.children.length);
		for (var j = 0; j < tagsOfPost.children.length; j++) {
			stringsOfTagsInPosts += tagsOfPost.children[j].innerHTML;
		}


		if (!isSubsetOf(stringsOfTagsInPosts, tag) && tag.length != 0) {
		 	test = false;
		 }

		if(test === false) {
			posts[i].style.display = 'none';
		}
		if(test === true) {
			posts[i].style.display = 'block';
		}
	}
	tag = [];
}

function isSubsetOf(string, arr) {
		for (var i = 0; i < arr.length; i++) {
			if (string.indexOf(arr[i].toLowerCase()) != -1) {
				return true;
			}
		}
		return false;
}


var tagContainerLeft = document.getElementById('tags-left');
 var tagContainerRight = document.getElementById('tags-right');
 var newTagInput = document.getElementById('newpost-text');
 var addTagButton = document.getElementById('newtag-button');
 addTagButton.addEventListener('click', function() {
 	if (newTagInput && newTagInput.value) {
 		var tagHTML = '<div class = "tag"><input type="checkbox" id=' + newTagInput.value + ' name=' + newTagInput.value + '><label for=' + newTagInput.value + '>' + newTagInput.value + '</label></div>'
 		tagContainerLeft.insertAdjacentHTML('beforeend', tagHTML);
 		tagContainerRight.insertAdjacentHTML('beforeend', tagHTML);

 		newTagInput.value = "";
 	} else {
 		alert("You must enter a tag before adding one!");
 	}
 });
