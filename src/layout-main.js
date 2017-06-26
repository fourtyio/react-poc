import React from 'react';
// import { Link } from 'react-router';

export default function(props) {
  return (
    <div className="app">
      <header><h3>Users</h3></header>
      <main>
        {props.children}
      </main>
    </div>
    );
}
