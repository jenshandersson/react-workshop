import React, { Component } from "react";
import { Link } from 'react-router-dom';

const USERS = [
  { id: 1, name: "Anna" },
  { id: 2, name: "John" },
  { id: 3, name: "Michael" }
];

class UserList extends Component {
  render() {
    return (
      <>
        <h2>Users</h2>
        <ul>
          {USERS.map(u => (
            <li key={u.id}>
              <Link to={`/users/${u.id}`}>
                {u.id} - {u.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default UserList;
