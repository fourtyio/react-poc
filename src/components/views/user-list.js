import React from 'react';
import { Link } from 'react-router-dom';
import './user-list.css';

export default (props) => {
  console.log('props', props)
  return (
    <ul className='userlist'>
    {props.users.map(user => {
      {/*<Link to={'/users/' + user.id}>{user.name}</Link>*/}
      return <li key={user.id}><Link to={`/${user.id}`}>{user.name}</Link></li>
    })
    }
    </ul>
  )
}
