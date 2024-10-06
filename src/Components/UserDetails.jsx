import React from "react";
import { useLocation } from "react-router-dom";

function UserDetails() {
  const location = useLocation();
  const user = location.state.user;

  return (
    <div className="user-details">
      <span style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "20px" }}>
        <h1>User Details</h1>
        <hr />
      </span>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <spab>
        <button className="backBtn" onClick={() => window.history.back()}>
          Back
        </button>
      </spab>
    </div>
  );
}

export default UserDetails;
