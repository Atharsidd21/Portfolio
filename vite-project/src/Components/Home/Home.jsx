// import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css";
import NavBar from "../Navbar/NavBar";
import Typewriter from "./typewriter";
import { useDispatch } from "react-redux";
import { handleNav } from "../../reducers/navbar/navbar";
export default function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <NavBar />
      <div className="container" onClick={() => dispatch(handleNav(false))}>
        <div className="name">
          <h1 style={{ color: "#002057" }}>Hi There</h1>
          <h1 style={{ color: "#002057" }}>
            I&apos;m Athar <span style={{ color: "orange" }}>Siddiqui</span>
          </h1>
          <h1>
            I am into{" "}
            <span style={{ color: "darkred" }}>
              <Typewriter text="Game Development" delay={200} infinite />
            </span>
          </h1>

          <Link to="/about">
            <button className="btn">
              About Me <i className="fa-solid fa-arrow-down"></i>
            </button>
          </Link>
          <div>
            <ul className="social">
              <Link
                target="_blank"
                to={"https://www.linkedin.com/in/athar-siddiqui-b584a7227/"}
              >
                <li className="social-list">
                  <i className="fa-brands fa-linkedin"></i>
                </li>
              </Link>
              <Link to={"https://github.com/Atharsidd21"} target="_blank">
                <li className="social-list">
                  <i className="fa-brands fa-square-github"></i>
                </li>
              </Link>
              <Link to={"https://www.instagram.com/oye_siddiqui_?igsh=ejFieXA4endkb21y"} target="_blank">
                <li className="social-list">
                  <i className="fa-brands fa-instagram"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="img">
          <img id="avatar" src="\atharsidd.png" alt="img" />
        </div>
      </div>
    </>
  );
}
