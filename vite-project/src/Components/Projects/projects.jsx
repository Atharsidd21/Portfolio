import { useDispatch } from "react-redux";
import NavBar from "../Navbar/NavBar";
import "./projects.css";
import Project from "./project";
import { handleNav } from "../../reducers/navbar/navbar";

export default function Projects() {
  const dispatch = useDispatch();
  const projectsLists = [
    {
      img: "/p1.jpg",
      name: "Delivery Dash",
      details:
        "A 2D delivery game created by Unity and C#.",
      link: "https://github.com/Atharsidd21/Delivery-Dash.git",
      link: "https://atharsiddiqui21.itch.io/delivery-dash",
      
    },
    {
      img: "/snowboarder.png",
      name: "SnowBoarder",
      details:
        "A 2D snow boarding game made by Unity and C#. ",
      link: "https://github.com/Atharsidd21/snowboarder.git",
      link: "https://atharsiddiqui21.itch.io/snow-boarder",
    },
    {
      img: "/quizmania.png",
      name: "QuizMania",
      details:
        "A movie quiz game made by using Unity UI Canvas and C#.",
      link: "https://github.com/Atharsidd21/QuizMania.git",
      link: "https://atharsiddiqui21.itch.io/quizmania",
    },
    
    
  ];
  return (
    <>
      <NavBar />
      <div
        className="container-projects"
        onClick={() => dispatch(handleNav(false))}
      >
        <div className="project-header">
          <i
            id="comp"
            style={{ color: "white" }}
            className="fa-solid fa-laptop-code"
          ></i>
          <h1 id="name-head" style={{ color: "white" }}>
            Projects <span style={{ color: "yellow" }}>Made</span>
          </h1>
        </div>
        <div className="project-body">
          {projectsLists.map((item, index) => {
            return (
              <Project
                key={index}
                img={item.img}
                details={item.details}
                name={item.name}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
