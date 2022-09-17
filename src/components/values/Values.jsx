import { useState } from "react";
import "./values.scss";

export default function Values() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Inovation",
      desc:
        "We embrace innovation and strive to simplify process .",
     
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Engagement",
      desc:
      "We constantly look to improve and never forget the importance of our customer and colleagues",
    },
    {
      id: "3",
      icon: "./assets/teamwork.jpg",
      title: "Teamwork",
      desc:
        " We work as a one team to maximise people potential.",
      
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Cusomer Focus",
      desc:
      " We exceed a expectation through great disipline and ensure a world class customer experence"
      
    },

    {
      id: "5",
      icon: "./assets/writing.png",
      title: "Speed ",
      desc: 
        "Fast is better than slow but we will not copromise on quality"
    },
    {
      id: "6",
      icon: "assets/writing.png",
      title: "Integrity",
      desc: "Our greatest asset is that we love and support our colleges and operate without hierarchy "
    }


  ];


  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    
  <div className="values" id="values">  
     <div className= "center">
    <br></br>
  <h1>Values</h1>
<br></br><br></br>
  <div className="slider " style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
<br></br>
  {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  
                </div>
              </div>
              <div className="right">
            
      <img src="assets/core-values-logo.png"
            alt= "" />
                
              </div>
            </div>
          </div>
          
        ))}
      </div>
        
      <img src="assets/left.png" className="arrow left"
        alt="down" onClick={() => handleClick("left")}/>
      
      <img
        src="assets/left.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
      </div>
    </div>
   
  );
}
