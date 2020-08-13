import songsData from './songs-data';
let currentLevel;
export default class SongsBase {

setLevel(level) {
	currentLevel = level;
}
     
getResource() {
	return songsData[currentLevel];
  }
}