import React from "react";
import { Link } from "react-router-dom";
/*
description: "Institution structure say argue bit. Each option high executive easy pattern. Majority white hour there reach drive produce."
handle: "wiggins-frederick-boyer"
logoUrl: "/logos/logo2.png"
name: "Wiggins, Frederick and Boyer"
numEmployees: 298 */

function CompanyCard({ info }) {
  return (
    <div className="content">
      <p>
        <strong>Company Name:</strong>
        <Link to={"/companies/" + info.handle}>{info.name}</Link>
      </p>
      <p>
        <strong>Description: </strong>
        {info.description}
      </p>
      <hr></hr>
    </div>
  );
}

export default CompanyCard;
