var pos = document.getElementById("pos");
var myVideo = document.getElementById("video1"); 

function playPause() {
	pos.style.display = "none"
    myVideo.play(); 			
} 
pos.onclick = playPause ;