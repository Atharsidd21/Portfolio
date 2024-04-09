import { useDispatch } from "react-redux";
import { handleNav } from "../../reducers/navbar/navbar";
import NavBar from "../Navbar/NavBar";
import "./skills.css";

export default function Skills() {
  const lists = [
    {
      img: "/unity.png",
      name: "Unity",
    },
    {
      img: "/csharp.png",
      name: "C#",
    },
    {
      img: "/git.png",
      name: "Github",
    },
    
    {
      img: "/blender.png",
      name: "Blender",
    },
   
   
  ];
    
    
    
   
    
  const dispatch = useDispatch();
  return (
    <>
      <NavBar />
      <div
        className="container-skills"
        onClick={() => dispatch(handleNav(false))}
      >
        <div className="skills-header">
          <i id="comp" className="fa-solid fa-laptop-code"></i>
          <h1 style={{ color: "white" ,fontSize:"1.5rem" }}>
            Skills & <span style={{ color: "yellow" }}>Abilities</span>
          </h1>
        </div>
        <div className="skills">
          {lists.map((item, index) => {
            return (
              <div className="set" key={index}>
                <div className="img-map">
                  <img id="skill-img" src={item.img} alt="" />
                </div>
                <p key={index}>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
