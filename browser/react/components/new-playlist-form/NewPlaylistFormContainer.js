'use strict';

import { connect } from 'react-redux';

import NewPlaylistForm from './NewPlaylistForm';
import addPlaylist from '../../ducks/playlists';

// const mapDispatchToProps = dispatch => ({
//   addPlaylist: name => dispatch(addPlaylist(name))
// });

export default connect(null, null)(NewPlaylistForm);
