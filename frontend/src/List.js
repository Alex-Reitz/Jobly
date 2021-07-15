import React from "react";
import CompanyCard from "./CompanyCard";
import JobCard from "./JobCard";

function List({ list }) {
  let listValues = Object.values(list);
  if (listValues.length === 200) {
    return (
      <div>
        <h1>Take a look at these Jobs!</h1>
        {listValues.map((job) => (
          <JobCard key={job.id} info={job} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Here are all the companies we have</h1>
        {listValues.map((company) => (
          <CompanyCard key={company.handle} info={company} />
        ))}
      </div>
    );
  }
}

export default List;
