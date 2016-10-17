'use strict';

const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
const initialPlaylist = {};

export const receivePlaylist = playlist => ({
    type: RECEIVE_PLAYLIST,
    playlist
});

export default function selectedPlaylistReducer (state = initialPlaylist, action) {
  switch (action.type) {
    case RECEIVE_PLAYLIST: return action.playlist;
    default: return state;
  }
}
