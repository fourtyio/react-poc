import React from 'react';
import UserList from '../views/user-list';

const createReactClass = require('create-react-class');
const UserListContainer = createReactClass({

  getInitialState: function() {
    return {
      users: [
        {
          id: 1,
          name: 'bob',
        },
        {
          id: 2,
          name: 'mary',
        },
        {
          id: 3,
          name: 'kate',
        },
      ]
    }
  },

  render() {
    return (
      <UserList users={this.state.users}/>
    )
  }
})

export default UserListContainer;
