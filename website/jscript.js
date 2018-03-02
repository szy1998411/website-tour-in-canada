var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var back1 = document.getElementById("back");
var trt=document.getElementById("toronto");
function call(){
    modal.style.display = "block";
    modalImg.src = "grey map.jpg";
    back1.classList.add("blur2");
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
    back1.classList.remove("blur2");
}


function home(){
	location.href = "travel in canada.html";
}
