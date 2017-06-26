import React from 'react';
import { Link } from 'react-router-dom';

const createReactClass = require('create-react-class');

const UserProfileContainer = createReactClass({
  render() {
    return (
      <div>
        <Link to='/'>back</Link> <br />
        this is userprofile
      </div>
    )
  }
})

export default UserProfileContainer;
