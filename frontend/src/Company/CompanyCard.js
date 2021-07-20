import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";
/*
description: "Institution structure say argue bit. Each option high executive easy pattern. Majority white hour there reach drive produce."
handle: "wiggins-frederick-boyer"
logoUrl: "/logos/logo2.png"
name: "Wiggins, Frederick and Boyer"
numEmployees: 298 */

function CompanyCard({ info }) {
  return (
    <div className="content">
      <p className="company-name-link">
        <strong>Company Name: </strong>
        <Link to={"/companies/" + info.handle}> {info.name}</Link>
      </p>
      <p className="company-description-card">
        <strong>Description: </strong>
        {info.description}
      </p>
    </div>
  );
}

export default CompanyCard;
