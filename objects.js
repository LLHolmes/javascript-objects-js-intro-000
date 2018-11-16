var playlist = {};
playlist['Michael Jackson'] = 'PYT'

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  var artist = artistName
  delete playlist.artist;
  return playlist;
}
