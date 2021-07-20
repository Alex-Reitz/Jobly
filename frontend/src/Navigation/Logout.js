import React from "react";
import "./Logout.css";

function Logout({ logout }) {
  return (
    <div className="logout-container">
      <h4 className="exit-message">
        Click logout to leave. We'll see you next time!
      </h4>
      <button id="logout" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
