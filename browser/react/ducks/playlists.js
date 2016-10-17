export const ADD_PLAYLIST = 'ADD_PLAYLIST';

const initialPlaylists = [];

export const addPlaylist = name => ({
  type: ADD_PLAYLIST,
  playlist: { name }
});

export const playlistsReducer = (state = initialPlaylists, action) => {
  switch (action.type) {
    case ADD_PLAYLIST:
      return [...state, action.playlist];
    default:
      return state;
  }
};
