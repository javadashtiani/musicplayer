let audioSrc = [
  "audio/tm-bax.mp3",
  "audio/shadmehr.ogg",
  "audio/saman.mp3",
  "audio/mohsen.mp3",
  "audio/farzad.mp3",
];
let audioIndex = 0;

let audio = document.getElementById("audio");
let playBtn = document.querySelector(".play");
let playIcon = document.querySelector("#play-icon");
let nextAudio = document.querySelector(".forward");
let prevAudio = document.querySelector(".backward");
let audioName = document.querySelector(".audio-name");
let audioSinger = document.querySelector(".audio-singer");
let img = document.querySelector("img");
let timeLine = document.querySelector(".time-line");
let circle = document.querySelector(".circle");
let imgAudio = document.querySelector(".image-audio");
let i = 1;
playBtn.addEventListener("click", () => {
  if (i % 2) {
    audio.play();
    img.style.animation = "animateImage linear infinite alternate 1s";
    playIcon.classList.remove("bi-play-fill");
    playIcon.classList.add("bi-pause-fill");
  } else {
    audio.pause();
    img.style.animation = "none";
    playIcon.classList.remove("bi-pause-fill");
    playIcon.classList.add("bi-play-fill");
  }
  i++;
});


nextAudio.addEventListener("click", function () {
  audioIndex++;
  if (audioIndex > audioSrc.length - 1) {
    audioIndex = 0;
    _tmBax();
  }
  audio.setAttribute("src", audioSrc[audioIndex]);
  audio.play();
  _shadmehr();
  _saman();
  _mohsen();
  _farzad();
});
prevAudio.addEventListener("click", () => {
  audioIndex--;
  if (audioIndex < 0) {
    audioIndex = 4;
  }
  audio.setAttribute("src", audioSrc[audioIndex]);
  audio.play();
  _shadmehr();
  _saman();
  _mohsen();
  _tmBax();
  _farzad();
});

function _tmBax() {
  if (audioIndex === 0) {
    audioName.innerHTML = "Dokhtare Bandar";
    audioSinger.innerHTML = "TM Bax";
    img.setAttribute("src", "img/tmbax.jpg");
  }
}
function _shadmehr() {
  if (audioIndex === 1) {
    audioName.innerHTML = "Bi Ehsas";
    audioSinger.innerHTML = "Shadmehr";
    img.setAttribute("src", "img/shadmehr.jpg");
  }
}
function _saman() {
  if (audioIndex === 2) {
    audioName.innerHTML = "Jonoun";
    audioSinger.innerHTML = "Saman Jalili";
    img.setAttribute("src", "img/saman.jpg");
  }
}
function _mohsen() {
  if (audioIndex === 3) {
    audioName.innerHTML = "Ey dele tanha";
    audioSinger.innerHTML = "Mohsen Yeganeh";
    img.setAttribute("src", "img/mohsen.jpg");
  }
}
function _farzad() {
  if (audioIndex === 4) {
    audioName.innerHTML = "Javaher";
    audioSinger.innerHTML = "Farzad Farzin";
    img.setAttribute("src", "img/farzad.jpg");
  }
}
function updateCircle(e) {
  const { duration, currentTime } = e.srcElement;
  const circlePercent = (currentTime / duration) * 100;
  circle.style.width = `${circlePercent}%`;
}
function setTimeLine(e) {
  const _width = e.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / _width) * duration;
}
audio.addEventListener("timeupdate", updateCircle);
timeLine.addEventListener("click", setTimeLine);
