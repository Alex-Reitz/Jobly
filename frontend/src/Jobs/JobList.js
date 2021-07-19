import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JoblyApi from "../api";

function JobList() {
  const [jobFormData, setJobFormData] = useState({
    title: "",
  });
  const [jobs, setJobs] = useState([]);
  //Gets jobs list from backend on page load
  useEffect(() => {
    async function getJobs() {
      const res = await JoblyApi.getJobs();
      setJobs(res.jobs);
      return res.jobs;
    }
    getJobs();
  }, []);

  //function to get all jobs by title matching a query from the search form, returns all jobs if form is blank on submission
  const searchJobNames = (data) => {
    if (data.title.length === 0) {
      async function getJobs() {
        const res = await JoblyApi.getJobs();
        setJobs(res.jobs);
        return res.jobs;
      }
      getJobs();
    } else {
      async function searchName() {
        let res = await JoblyApi.searchJobs(data);
        setJobs(res.jobs);
        return res.jobs;
      }
      searchName();
    }
  };

  //Handle form change
  const handleJobChange = (evt) => {
    const { name, value } = evt.target;
    setJobFormData((jobFormData) => ({
      ...jobFormData,
      [name]: value,
    }));
  };
  //Gther input from form on submission
  const gatherJobInput = (evt) => {
    evt.preventDefault();
    searchJobNames({ ...jobFormData });
  };
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
      {jobs.map((job) => (
        <JobCard key={job.id} info={job} />
      ))}
    </div>
  );
}

export default JobList;
