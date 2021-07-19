import React, { useState } from "react";
import CompanyCard from "./CompanyCard";

function CompanyList({ list, search }) {
  const [companyFormData, setCompanyFormData] = useState({
    name: "",
  });
  const gatherCompanyInput = (evt) => {
    evt.preventDefault();
    search({ ...companyFormData });
  };
  const handleCompanyChange = (evt) => {
    const { name, value } = evt.target;
    setCompanyFormData((companyFormData) => ({
      ...companyFormData,
      [name]: value,
    }));
  };
  let listValues = Object.values(list);

  return (
    <div>
      <h1>Here are all the companies we have</h1>
      <div className="search">
        <form onSubmit={gatherCompanyInput}>
          <label htmlFor="name">Search Company Names</label>
          <input
            onChange={handleCompanyChange}
            type="text"
            name="name"
            value={companyFormData.name}
            id="name"
          />
        </form>
        <hr></hr>
      </div>
      {listValues.map((company) => (
        <CompanyCard key={company.handle} info={company} />
      ))}
    </div>
  );
}

export default CompanyList;
