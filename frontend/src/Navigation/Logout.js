import React, { useState } from "react";
import "./Logout.css";

function Logout({ logout }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="logout-container">
      <h4 className="exit-message">
        Click logout to leave. We'll see you next time!
      </h4>
      <button
        className={click ? "buttonTrue" : "buttonFalse"}
        id="logout"
        onClick={() => {
          handleClick();
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
