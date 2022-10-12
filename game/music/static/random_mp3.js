let audioEl = document.getElementById("audio");
let toggleEls = document.getElementsByClassName("randommp3");
let btns = document.getElementsByClassName("btn");
let urlArr = [
  "https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7112261293704334111.mp3",
  "https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7101901506693040932.mp3",
  "https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/7107942098665507620.mp3",
  "https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/6894897543327976205.mp3",
  "https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7114218181234739998.mp3",
  "https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/7114108176684911396.mp3",
];
let url = urlArr[Math.floor(Math.random() * urlArr.length)];
audioEl.src = url;
audioEl.play();

//播放状态
let playStatus = false;
//随机音乐 去重用

audioEl.onended = function () {
  let newUrl = urlArr[Math.floor(Math.random() * urlArr.length)];
  while (url == newUrl) {
    newUrl = urlArr[Math.floor(Math.random() * urlArr.length)];
  }
  audioEl.src = newUrl;
  url = newUrl;
  audioEl.play();
};

Array.from(toggleEls).forEach((toggleEl) => {
  toggleEl.addEventListener("click", () => {
    let newUrl = urlArr[Math.floor(Math.random() * urlArr.length)];
    while (url == newUrl) {
      newUrl = urlArr[Math.floor(Math.random() * urlArr.length)];
    }
    audioEl.src = newUrl;
    url = newUrl;
    audioEl.play();
  });
});

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", () => {
    if (playStatus) return;
    let newUrl = urlArr[Math.floor(Math.random() * urlArr.length)];
    while (url == newUrl) {
      newUrl = urlArr[Math.floor(Math.random() * urlArr.length)];
    }
    audioEl.src = newUrl;
    url = newUrl;
    audioEl.play();
    playStatus = true;
  });
});
