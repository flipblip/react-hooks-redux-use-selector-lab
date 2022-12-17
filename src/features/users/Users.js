import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here


function Users() {

  const users = useSelector((state) => state.users)
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {users.map((user, ind) =>
          <li
            key={ind}>
            {user.username} : {user.hometown}
          </li>)}
        {/* In addition, display the total number of users curently in the store */}
        Total Users: {users.length}
      </ul>
    </div>
  );
}

export default Users;
