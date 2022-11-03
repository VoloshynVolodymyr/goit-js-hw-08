import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player', {
  id: 'vimeo-player',
  width: 640,
});

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  console.log(data);
  localStorage.setItem(KEY, `${data.seconds}`);
}

const savePoint = localStorage.getItem(KEY);

player.setCurrentTime(savePoint);
