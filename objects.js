var playlist = {
  Tupac:"All Eyes"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
  return delete playlist.artistName;
  
}



