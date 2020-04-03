var playlist = {
  Tupac:"All Eyes"
};

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, playlist, {[artistName: songTitle]});
}





