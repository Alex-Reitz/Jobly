import React, { useState } from "react";
import CompanyCard from "./Company/CompanyCard";
import JobCard from "./JobCard";

function List({ list, search }) {
  const [companyFormData, setCompanyFormData] = useState({
    name: "",
  });
  const [jobFormData, setJobFormData] = useState({
    title: "",
  });
  const handleCompanyChange = (evt) => {
    const { name, value } = evt.target;
    setCompanyFormData((companyFormData) => ({
      ...companyFormData,
      [name]: value,
    }));
  };
  const handleJobChange = (evt) => {
    const { name, value } = evt.target;
    setJobFormData((jobFormData) => ({
      ...jobFormData,
      [name]: value,
    }));
  };
  const gatherCompanyInput = (evt) => {
    evt.preventDefault();
    search({ ...companyFormData });
  };
  const gatherJobInput = (evt) => {
    evt.preventDefault();
    search({ ...jobFormData });
  };

  let listValues = Object.values(list);
  if ("handle" in list[0]) {
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
  } else {
    return (
      <div>
        <h1>Take a look at these Jobs!</h1>
        <div className="search">
          <form onSubmit={gatherJobInput}>
            <label htmlFor="title">Search Job Titles</label>
            <input
              onChange={handleJobChange}
              type="text"
              name="title"
              value={jobFormData.title}
              id="title"
            />
          </form>
          <hr></hr>
        </div>
        {listValues.map((job) => (
          <JobCard key={job.id} info={job} />
        ))}
      </div>
    );
  }
}

export default List;
