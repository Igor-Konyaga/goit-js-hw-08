import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, [1000]));

function onPlay(e) {
  console.log(e.seconds);

  let seconds = e.seconds;

  localStorage.setItem('videoplayer-current-time', seconds);
}

const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime || 0);

