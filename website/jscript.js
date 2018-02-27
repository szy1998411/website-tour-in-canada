var modal = document.getElementById('myModal');

var modalImg = document.getElementById("img01");
function call(){
    modal.style.display = "block";
    modalImg.src = "img_fjords.jpg";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

function home(){
	location.href = "travel in canada.html";
}