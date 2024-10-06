import axios from "axios";
import React, { useState } from "react";

function Modal({ className, style, setFilterdUser, filterdUser, setModal }) {
  const [eror, setError] = useState("");

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      website: e.target.website.value,
    };

    if (!user.name || !user.email || !user.phone || !user.website) {
      setError("Please fill all the fields");
    } else {
      try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/users", user);
        setFilterdUser([...filterdUser, response.data]);
        setModal(false);
      } catch (error) {
        setError(error);
      }
    }
  };

  return (
    <div className={className} style={style}>
      <form onSubmit={handleCreateSubmit}>
        <span>
          <h1>Create User</h1>
          <button onClick={(prev) => setModal(!prev)}>X</button>
        </span>
        {eror && <div className="error">Error</div>}
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="phone" placeholder="Phone" />
        <input type="text" name="website" placeholder="Website" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Modal;
