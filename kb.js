var c = new Audio()
c.src = "http://www.fvi-grad.com/audio/c.mp3"
c.load()

var d = new Audio()
d.src = "http://www.fvi-grad.com/audio/d.mp3"
d.load()

var e = new Audio()
e.src = "http://www.fvi-grad.com/audio/e.mp3"
e.load()

var f = new Audio()
f.src = "http://www.fvi-grad.com/audio/f.mp3"
f.load()

var g = new Audio()
g.src = "http://www.fvi-grad.com/audio/g.mp3"
g.load()

document.onkeydown = function(event){
  if(event.keyCode === 65){
    c.currentTime = 0
    c.play()
  }
  else if(event.keyCode === 83){
    d.currentTime = 0
    d.play()
  }
  else if (event.keyCode === 68){
    e.currentTime = 0
    e.play()
  }
  else if (event.keyCode === 70){
    f.currentTime = 0
    f.play()
  }
  else if (event.keyCode === 71){
    g.currentTime = 0
    g.play()
  }
}

