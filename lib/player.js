export default function audioSystem(src, setPlaying) {
  //Audio Status
  const audio = new Audio(); //Creating new audio html element object
  audio.src = src; //Setting the source audio for audio element

  //DOM Updates
  const progress = document.querySelector("#song_progress");
  const progressBar = document.querySelector("#bar");
  const playButton = document.querySelector("#play_butt");
  const play_button_img = document.querySelector("#play_butt_img");
  const currentTime = document.querySelector("#song_current_time");
  const totalDuration = document.querySelector("#song_duration");
  function formatDuration(duration) {
    function padLeft(num, length) {
      let r = String(num);
      while (r.length < length) {
        r = "0" + r;
      }
      return r;
    }
    duration = Math.round(duration);
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    if (minutes < 60) {
      return padLeft(minutes, 2) + ":" + padLeft(seconds, 2);
    }
    let hours = Math.floor(minutes / 60);
    minutes = Math.floor(minutes % 60);
    return hours + ":" + padLeft(minutes, 2) + ":" + padLeft(seconds, 2);
  }
  function updateOnStart() {
    setPlaying(false);
    currentTime.innerText = formatDuration(audio.currentTime);
    if (audio.duration) {
      totalDuration.innerText = formatDuration(audio.duration);
    }
    console.log(audio.duration);
  }
  updateOnStart();
  playButton.addEventListener("click", (e) => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
  function handleProgress() {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
    currentTime.innerText = formatDuration(audio.currentTime);
  }
  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * audio.duration;
    audio.currentTime = scrubTime;
  }
  progress.addEventListener("click", scrub);
  progress.addEventListener("click", handleProgress);
  audio.addEventListener("loadstart", (e) => {
    //Loading Song
    audio.currentTime = 0;
    progressBar.style.flexBasis = `0%`;
    audio.pause();
    currentTime.innerText = formatDuration(audio.currentTime);
    if (audio.duration) {
      totalDuration.innerText = formatDuration(audio.duration);
    }
  });
  audio.addEventListener("loadeddata", (e) => {});
  audio.addEventListener("ended", (e) => {});
  audio.addEventListener("pause", (e) => {
    setPlaying(false);
  });
  audio.addEventListener("play", (e) => {
    setPlaying(true);
  });
  audio.addEventListener("volumechange", (e) => {});
  audio.addEventListener("timeupdate", handleProgress);
}
