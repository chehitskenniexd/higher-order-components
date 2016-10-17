'use strict';

import React from 'react';
import NewPlaylistForm from './NewPlaylistForm';
import { addPlaylist } from '../../ducks/playlists';
import { connect } from 'react-redux';

const NewPlaylistFormDecorator = FormComponent => (
  class DecoratorClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmitDec = this.handleSubmitDec.bind(this);
    }

    handleChange(event) {
      this.setState({title: event.target.value});
      // console.log(this.state.title);
    }

    handleSubmitDec(event) {
      console.log('ddeeeeeeecccccccc');
      event.preventDefault();
      this.props.handleSubmit(this.state.title);
      console.log('title submited:',this.state.title);
    }

    render() {
      return (
        <FormComponent handleSubmit={this.handleSubmitDec} handleChange={this.handleChange}/>
      );
    }
  }
  );

const DecoratedNewPlaylistForm = NewPlaylistFormDecorator(NewPlaylistForm);



const mapDispatchToProps = dispatch => ({
  handleSubmit: name => {
    console.log('dispatching:', name);
    dispatch(addPlaylist(name))
  }
})

export default connect(null, mapDispatchToProps)(DecoratedNewPlaylistForm);
