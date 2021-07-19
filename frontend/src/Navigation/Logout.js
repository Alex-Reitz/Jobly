import React from "react";

function Logout({ logout }) {
  return (
    <div>
      <p>We'll see you next time!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Logout;
