

var c = new Audio();
c.src = "http://www.fvi-grad.com/audio/c.mp3";
c.load();
document.onkeydown = function(){
c.currentTime = 0;
c.play();
}