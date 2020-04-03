var playlist = {
  Tupac:"All Eyes"
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle});
}





