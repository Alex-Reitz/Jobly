import React, { useState, useEffect, useContext } from "react";
import JobCard from "./JobCard";
import JoblyApi from "../api";
import UserContext from "../Context/userContext";
import "./JobList.css";

function JobList() {
  const [jobFormData, setJobFormData] = useState({
    title: "",
  });
  const [jobs, setJobs] = useState([]);
  const { currentUser } = useContext(UserContext);

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
  if (!currentUser.username) {
    return (
      <div>
        <h1 className="logged-in-warning">
          You must be logged in to access the jobs list
        </h1>
      </div>
    );
  } else {
    return (
      <div className="joblist-container">
        <h1 className="job-heading">Take a look at these Jobs!</h1>
        <div className="search">
          <form onSubmit={gatherJobInput}>
            <label className="search-jobs-label" htmlFor="title">
              Search Job Titles
            </label>
            <input
              className="job-title-search-input"
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
}

export default JobList;
