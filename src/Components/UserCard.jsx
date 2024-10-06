import React from "react";

function UserCard({ user, handleDelete, handleEdit }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>
        <span className="action-div">
          <button onClick={() => handleEdit(user)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </span>
      </td>
    </tr>
  );
}

export default UserCard;
