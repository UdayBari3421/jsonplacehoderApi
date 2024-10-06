import React, { useEffect, useState } from "react";
import UserList from "./Components/UserList";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EditUser from "./Components/EditUser";
import UserDetails from "./Components/UserDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [filterdUser, setFilterdUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(false);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
      setFilterdUser(data);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route path="/" element={<UserList loading={loading} users={users} setFilterdUser={setFilterdUser} filterdUser={filterdUser} />} />
          <Route path="users/:id" element={<EditUser />} />
          <Route path="users/:id/view" element={<UserDetails />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
