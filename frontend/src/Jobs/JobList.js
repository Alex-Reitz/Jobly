import React, { useState } from "react";
import JobCard from "./JobCard";

function JobList({ list, search }) {
  const [jobFormData, setJobFormData] = useState({
    title: "",
  });
  const handleJobChange = (evt) => {
    const { name, value } = evt.target;
    setJobFormData((jobFormData) => ({
      ...jobFormData,
      [name]: value,
    }));
  };
  const gatherJobInput = (evt) => {
    evt.preventDefault();
    search({ ...jobFormData });
  };
  let listValues = Object.values(list);
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

export default JobList;
