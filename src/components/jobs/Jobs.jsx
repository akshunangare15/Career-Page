import { useEffect, useState } from "react";
import JobList from "../jobList/JobList";
import "./jobs.scss";
import {JobPostionJobs} from "../../data";

export default function Jobs() {
  const [selected, setSelected] = useState("JobPostion");
  const [data, setData] = useState([]);
  const list = [   
    {
      id: "Job Postion",
      // title: "Job Postion",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "JobPostion":
        setData(JobPostionJobs);
        break;
     
    }
  }, [selected]);

  return (
    <div className="jobs" id="jobs">
      <br></br>
      <h1>Job List</h1>

      <ul>
        {list.map((item) => (
          <JobList
          title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
        />
      ))}
    </ul>
    <div className="container">
      {data.map((d) => (
        <div className="item">
          <img
            src={d.img}
            alt=""
          />
          <h3>{d.title}</h3>
          
          
        </div>
      ))}
    </div>
  </div>
);
}
