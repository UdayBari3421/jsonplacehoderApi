import React from "react";
import { useNavigate } from "react-router-dom";

function UserCard({ user, handleDelete, handleEdit }) {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>
        <span className="action-div">
          <button onClick={() => navigate(`users/${user.id}/view`, { state: { user } })}>View</button>
          <button onClick={() => handleEdit(user)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </span>
      </td>
    </tr>
  );
}

export default UserCard;
