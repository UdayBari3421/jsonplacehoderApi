import axios from "axios";
import React from "react";

function Modal({ className, style, setFilterdUser, filterdUser, setModal }) {
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      website: e.target[3].value,
    };

    const response = await axios.post("https://jsonplaceholder.typicode.com/users", user);
    const newUser = response.data;
    const newData = [...filterdUser, newUser];

    setFilterdUser(newData);

    setModal(false);
  };

  return (
    <div className={className} style={style}>
      <form onSubmit={handleCreateSubmit}>
        <span>
          <h1>Create User</h1>
          <button onClick={(prev) => setModal(!prev)}>X</button>
        </span>

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input type="text" placeholder="Website" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Modal;
