import { useState } from "react";
import "./projects.css";
import { Link } from "react-router-dom";

export default function Project({ img, details, name, link }) {
  const [isHover, setHover] = useState(false);
  const handleChange = () => {
    setHover(!isHover);
  };
  return (
    <div
      className="pro-body"
      onMouseEnter={handleChange}
      onMouseLeave={handleChange}
    >
      <div
        style={{
          opacity: isHover ? "50%" : "100%",
          backgroundColor: isHover ? "transparent" : "aliceblue",
        }}
      >
        <img id="pro-img" src={img} alt="img" />
        <h3>{name}</h3>
      </div>
      <div
        className="pro-body2 "
        style={{ display: isHover ? "flex" : "none" }}
      >
        <div className="detail-div">
          {" "}
          <p> {details} </p>
        </div>
        <Link to={link} target="_blank">
          {" "}
          <button id="btn-view">View</button>
          
          <button id="btn-view">PLay</button>
        </Link>
      </div>
    </div>
  );
}
