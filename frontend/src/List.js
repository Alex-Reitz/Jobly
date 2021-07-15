import React from "react";

function List({ list }) {
  let listValues = Object.values(list);

  if (listValues.length == 200) {
    return (
      <div>
        <h1>This is the Jobs Component</h1>
        {listValues.map((job) => (
          <li key={job.id}>{job.title}</li>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1>This is the Companies component</h1>
        {listValues.map((company) => (
          <li key={company.handle}>{company.name}</li>
        ))}
      </div>
    );
  }

  /*  */
}

export default List;
