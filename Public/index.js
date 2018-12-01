// js file


document.getElementById('newpost-button').onclick = function(){show_newpost()};
document.getElementById('cancel-button').onclick = function(){hide_newpost()}
function show_newpost(){
	document.getElementById('newpost-button').style.visibility = 'hidden';
	document.getElementById('newpost-container').style.visibility = 'visible';
	document.getElementById('newpost-container').style.display = 'block';
}

function hide_newpost(){
	document.getElementById('newpost-button').style.visibility = 'visible';
	document.getElementById('newpost-container').style.visibility = 'hidden';
	document.getElementById('newpost-button').style.display = 'block';

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
