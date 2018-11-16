var playlist = {};
playlist['Michael Jackson'] = 'PYT'

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete artistName.playlist;
  return playlist;
}
