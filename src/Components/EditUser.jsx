import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditUser() {
  const location = useLocation();
  const user = location.state.user;

  const navigate = useNavigate();

  const handleEditForm = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const website = e.target[3].value;
    const id = user.id;
    const data = { name, email, phone, website, id };
    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, data);
    navigate("/", { state: { user: response.data } });
  };

  return (
    <form onSubmit={handleEditForm}>
      <span>
        <h1>Edit User</h1>
      </span>
      <input type="text" placeholder="Name" defaultValue={user.name} />
      <input type="email" placeholder="Email" defaultValue={user.email} />
      <input type="text" placeholder="Phone" defaultValue={user.phone} />
      <input type="text" placeholder="Website" defaultValue={user.website} />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditUser;
