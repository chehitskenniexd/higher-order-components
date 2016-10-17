'use strict'

import React from 'react'

export const ArtistsFilter = ({handleChange, text}) => (
    // Insert JSX Here
    <form className="ArtistsFilter">
        <input className="form-control" onChange={handleChange} />
        <h3>{text}</h3>
    </form>
)

function ArtistsFilterDecorator(Component) {
    return class ClassDecorator extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                filterText: ''
            }
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(evt) {
            this.setState({ filterText: evt.target.value });
        }

        render() {
            return (
                <Component handleChange={this.handleChange} text={this.state.filterText} />
            );
        }
    }
} // end function decorator

export default ArtistsFilterDecorator(ArtistsFilter);
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         handleChange: (input) => {

//         }
//     }
// }
