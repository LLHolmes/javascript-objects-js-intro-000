var playlist = {};
playlist['Michael Jackson'] = 'PYT'

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName;
}
