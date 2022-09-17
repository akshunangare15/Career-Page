import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  

  return (
    <div className="intro" id="intro">
      
      <div className="right"> 
      <div className="wrapper">
      <center><i><h1>Web Core</h1></i></center>    
      <center><h3> About us </h3></center>
        <h2>
        We do more than just work at Web Core. Technologists, developers, and engineers all contribute to our creation. With our collaborators, we produce. 
        With our rivals, we produce. We want to collaborate with you if you're looking for methods to improve the way the world functions through infrastructure, software, and consulting.The culture and creativity at the heart of all we do are important to our rapidly expanding software company. 
        To create the greatest ideas for the organization, we combine our expertise and creative abilities.
        </h2>
        
           
        </div>
        <a href="#values">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
