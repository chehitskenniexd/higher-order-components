'use strict'

import React from 'react'

export default () => {
    return (
        <div className="well">
            <form className="form-horizontal">
                <fieldset>
                    <legend>New Playlist</legend>
                    <div className="form-group">
                        <label className="col-xs-2 control-label">Name</label>
                        <div className="col-xs-10">
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-10 col-xs-offset-2">
                            <button type="submit" className="btn btn-success">Create Playlist</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}


/*
return fetch('api/playlists', {
    method: 'POST',
    body: JSON.stringify(someData),
    headers: new Header({'Content-Type': 'application/json'})
})
.then( res=>res.json )
.then(playlist => console.log(playlist));
*/