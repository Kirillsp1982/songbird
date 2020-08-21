import songsData from './songs-data';
let currentLevel;
export default class SongsBase {

setLevel(level = 0) {
	currentLevel = 0;
}
     
getResource() {
	return songsData[0];
  }
}