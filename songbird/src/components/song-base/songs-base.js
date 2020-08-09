import songsData from './songs-data';

export default class SongsBase {
	constructor() {
	this.songsData = songsData;
	}
    
getResource(level = 0) {
	return songsData[level];
  }
}