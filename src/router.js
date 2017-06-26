import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Main from './layout-main';
import UserListContainer from './components/containers/user-list-container';
import UserProfileContainer from './components/containers/user-profile-container';

export default (
  <BrowserRouter>
    <Main>
      <Switch>
        <Route exact path='/' component={UserListContainer}/>
        <Route path='/:userId' component={UserProfileContainer}/>
      </Switch>
    </Main>
  </BrowserRouter>
);
