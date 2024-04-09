// import React from 'react'
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleNav } from "../../reducers/navbar/navbar";
export default function NavBar() {
  let { pathname } = useLocation();
  const dispatch = useDispatch();
  const isNav = useSelector((state) => state.nav.value);
  return (
    <div className="box">
      <div className="tag">
        <img id="logo" src="\LOGO.jpg" alt="logo" />
        <h3 className="name">Athar Siddiqui</h3>
      </div>
      <i
        id="menu"
        onClick={() => {
          dispatch(handleNav(!isNav));
        }}
        className="fa-solid fa-bars"
      ></i>
      <ul id={isNav ? "nav" : ""} className="nav">
        <Link
          style={{
            color: pathname == "/" ? "blue" : "black",
            textDecoration: pathname == "/" ? "underline" : "none",
          }}
          to="/"
        >
          <li className="tags">Home</li>
        </Link>
        <Link
          to="/about"
          style={{
            color: pathname == "/about" ? "blue" : "black",
            textDecoration: pathname == "/about" ? "underline" : "none",
          }}
        >
          <li className="tags">About</li>
        </Link>
        <Link
          to="/skills"
          style={{
            color: pathname == "/skills" ? "blue" : "black",
            textDecoration: pathname == "/skills" ? "underline" : "none",
          }}
        >
          <li className="tags">Skills</li>
        </Link>
        <Link
          to="/education"
          style={{
            color: pathname == "/education" ? "blue" : "black",
            textDecoration: pathname == "/education" ? "underline" : "none",
          }}
        >
          <li className="tags">Education</li>
        </Link>
        <Link
          to="/work"
          style={{
            color: pathname == "/work" ? "blue" : "black",
            textDecoration: pathname == "/work" ? "underline" : "none",
          }}
        >
          <li className="tags">Work</li>
        </Link>
        <Link
          to="/experience"
          style={{
            color: pathname == "/experience" ? "blue" : "black",
            textDecoration: pathname == "/experience" ? "underline" : "none",
          }}
        >
         
          <li className="tags">Contact</li>
        </Link>
      </ul>
    </div>
  );
}
