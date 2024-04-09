import { useDispatch } from "react-redux";
import "./experience.css";
import NavBar from "../Navbar/NavBar";
import { handleNav } from "../../reducers/navbar/navbar";

export default function Experience() {
    const dispatch = useDispatch();
  const expList = [
    {
      companyName: "Mxpertz Infolabs",
      title: "Software Engineer Intern",
      duration: "June 2023-July 2023",
      location: "Indore",
      details:
        "During my 45-day software engineer internship, I learned web development skills as a beginner with basics like HTML,CSS and Javascript but since I had more interest in game development I started learning Unity and C# . I also engaged in a learning culture, received feedback,and over all had a great experience in the field.",
      img: "/mxpertz_logo.jpeg",
    },
  ];
  return (
    <>
    <NavBar/>
    <div className="container-exp" onClick={() => dispatch(handleNav(false))}>
      <div className="exp-header">
        <i id="exp-icon" className="fa-solid fa-briefcase"></i>
        <h1 id="exp-head">Experience</h1>
      </div>
      <div className="exp-main">
        {expList.map((item, index) => {
          return (
            <div key={index} className="exp-body">
              <img id="exp-img" src={item.img} alt="company image" />
              <div className="exp-info">
                <h1 style={{ color: "blue" }}>{item.companyName}</h1>
                <p style={{ color: "purple" }}>{item.title}</p>
                <p style={{ color: "green" }}>
                  {item.duration} |{" "}
                  <span style={{ color: "red" }}>
                    <i className="fa-solid fa-location-dot"></i> {item.location}
                  </span>{" "}
                </p>
                <br />
                <p>{item.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
