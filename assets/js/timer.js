// Variable block - Start.
var Timer = document.getElementById('Timer');
var hours = document.getElementById('hours').value;
var minutes = document.getElementById('minutes').value;
var seconds = document.getElementById('seconds').value;
var timerSound = new Audio();
timerSound.src = "assets/sound/ten.wav";
var tik = new Audio();
tik.src = "assets/sound/tik.mp3";
var timeisup = new Audio();
timeisup.src = "assets/sound/timeisup.wav";
// Variable block - End.

// Function start Timer - Start.
function startTimer() {
  hours = document.getElementById('hours').value;
  minutes = document.getElementById('minutes').value;
  seconds = document.getElementById('seconds').value;
  document.getElementById("hours").style.display = "none";
  document.getElementById("minutes").style.display = "none";
  document.getElementById("seconds").style.display = "none";
  if (hours == '') {
    hours = "00";
  }
  if (minutes == '') {
    minutes = "00";
  }
  if (seconds == '') {
    seconds = "00";
  }
  cycle();
}
// Function start Timer - End.

// Function stop Timer - Start.
function stop() {
  tik.pause()
  alert("paused");
}
// Function stop Timer - End.

// Function restart Timer - Start.
function restart() {
  location.reload();
  document.getElementById("hours").style.display = "inline";
  document.getElementById("minutes").style.display = "inline";
  document.getElementById("seconds").style.display = "inline";
}
// Function restart Timer - End.

// Function cycle Timer - Start.
function cycle() {
  hours = parseInt(hours);
  minutes = parseInt(minutes);
  seconds = parseInt(seconds);
  seconds = seconds - 1;

  tik.play();
  if (seconds == -1) {
    seconds = 0;
  }
  if (seconds == 0 && minutes !== 0) {
    minutes = minutes - 1;
    seconds = 60 - 1;
  }
  if (minutes == 0 && hours !== 0) {
    hours = hours - 1;
    minutes = 60 - 1;
  }
  if (hours == 0 && minutes == 00 && seconds < 11) {
    tik.pause();
    musicOneSound.pause();
  }
  if (hours == 0 && minutes == 00 && seconds == 10) {
    timerSound.play();
  }
  if (hours == 0 && minutes == 00 && seconds == 03) {
    var three = document.getElementById('three');
    three.innerHTML = 3;
  }
  if (hours == 0 && minutes == 00 && seconds == 02) {
    var two = document.getElementById('two');
    two.innerHTML = 2;
  }
  if (hours == 0 && minutes == 00 && seconds == 01) {
    var one = document.getElementById('one');
    one.innerHTML = 1;
  }
  if (hours == 0 && minutes == 00 && seconds == 00) {
    var text04 = document.getElementById('text04');
    var one = document.getElementById('one');
    one.style.display = "none";
    var two = document.getElementById('two');
    two.style.display = "none";
    var three = document.getElementById('three');
    three.style.display = "none";
    text04.innerHTML = "Time is up!";
    timeisup.play();
  }
  if (hours < 10 || hours == 0) {
    hours = "0" + hours;
  }
  if (minutes < 10 || minutes == 0) {
    minutes = "0" + minutes;
  }
  if (seconds < 10 || seconds == 0) {
    seconds = "0" + seconds;
  }
  Timer.innerHTML = hours + ":" + minutes + ":" + seconds + " " + "<p style='font-size: 20px;'>  Hours : Minutes : Seconds</p>";
  setTimeout("cycle()", 1060);
}
// Function cycle Timer - End.

// Function Full Screen - Start.
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
// Function Full Screen - End.

// Variable block background color - Start.
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var black = document.getElementById('black');
var orange = document.getElementById('orange');
// Variable block background color - End.

// background color - blue , green , black , orange events - Start.
black.addEventListener('click', function () {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
})

blue.addEventListener('click', function () {
  document.body.style.backgroundColor = "#0048ff42";
  document.getElementById("hours").style.borderBottom = "2px solid red";
  document.getElementById("minutes").style.borderBottom = "2px solid red";
  document.getElementById("seconds").style.borderBottom = "2px solid red";
  document.body.style.color = "black";
})

green.addEventListener('click', function () {
  document.body.style.backgroundColor = "#94db94";
  document.getElementById("hours").style.borderBottom = "2px solid red";
  document.getElementById("minutes").style.borderBottom = "2px solid red";
  document.getElementById("seconds").style.borderBottom = "2px solid red";
  document.body.style.color = "black";
})

orange.addEventListener('click', function () {
  document.body.style.backgroundColor = "orange";
  document.body.style.color = "black";
})
// background color - blue , green , black , orange events - End.

// Variable block background music - Start.
var musicOne = document.getElementById('musicOne');
var musicTwo = document.getElementById('musicTwo');
var musicThree = document.getElementById('musicThree');
var musicFour = document.getElementById('musicFour');
var musicOneSound = new Audio();
musicOneSound.src = "assets/music_backgound/1.mp3";
var musicTwoSound = new Audio();
musicTwoSound.src = "assets/music_backgound/2.mp3";
var musicThreeSound = new Audio();
musicThreeSound.src = "assets/music_backgound/3.mp3";
var musicFourSound = new Audio();
musicFourSound.src = "assets/music_backgound/4.mp3";
var stopMuisc = document.getElementById('stopMuisc');
// Variable block background music - End.

// background music - events - Start.
stopMuisc.addEventListener('click', function () {
  musicOneSound.pause()
  musicTwoSound.pause();
  musicThreeSound.pause();
  musicFourSound.pause();
})

musicOne.addEventListener('click', function () {
  musicOneSound.play();
});

musicTwo.addEventListener('click', function () {
  musicTwoSound.play();
});

musicThree.addEventListener('click', function () {
  musicThreeSound.play();
});

musicFour.addEventListener('click', function () {
  musicFourSound.play();
});
// background music - events - End.