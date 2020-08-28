import songsData from './songs-data';
let currentLevel = 0;
export default class SongsBase {

setLevel(level) {
	currentLevel = level;
}
     
getResource() {
	return songsData[currentLevel];
  }
}