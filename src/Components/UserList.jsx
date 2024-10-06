import React, { useEffect } from "react";
import UserCard from "./UserCard";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "./Modal.jsx";
import axios from "axios";

function UserList({ users, setFilterdUser, filterdUser, loading }) {
  const [modal, setModal] = React.useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    const newData = filterdUser.filter((user) => user.id !== id);
    setFilterdUser(newData);
  };

  const handleEdit = async (user) => {
    const { id } = user;
    navigate(`users/${id}`, { state: { user } });
  };

  useEffect(() => {
    if (location.state?.user) {
      const newUser = location.state.user;
      const newData = filterdUser.map((user) => (user.id === newUser.id ? newUser : user));
      setFilterdUser(newData);
    }
  }, [location]);

  return (
    <div className="content">
      {filterdUser.length > 0 && !loading ? (
        <>
          <span>
            <h1>All Users List</h1>
            <button onClick={() => setModal(!modal)}>Create User</button>
          </span>
          <Modal setModal={setModal} setFilterdUser={setFilterdUser} filterdUser={filterdUser} className="modal" style={modal ? { display: "flex" } : { display: "none" }} />
          <div>
            {users?.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filterdUser.map((user) => (
                    <UserCard key={user.id} user={user} handleDelete={handleDelete} handleEdit={handleEdit} />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      ) : (
        <div className="loader">loading...</div>
      )}
    </div>
  );
}

export default UserList;
