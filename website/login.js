var attempt = 3;
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if(username=="xiaotuji"&&password=="tbb"){
	window.location('toronto.html');
}
else{
	attempt--;
	alert("You have "+attempt+" attempt");
	if(attempt==0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
	}
}
}