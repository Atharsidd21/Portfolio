import { useDispatch } from "react-redux";
import "./education.css";
import NavBar from "../Navbar/NavBar.jsx";
import { handleNav } from "../../reducers/navbar/navbar.js";
export default function Education() {
  const dispatch = useDispatch();
  const edulist = [
    {
      name: "Rajasthan Technical University, Kota",
      year: "2021-2025",
      img: "/rtu.jpeg",
      degree: "Bachelor of Technology in Computer Science",
      status: "Pursuing",
    },
    {
      name: "Emmanuel Mission School,Talwandi,Kota",
      year: "2020",
      img: "/emm.jpeg",
      degree: "Higher Secondary Education",
      status: "Completed",
    },
  ];
  return (
    <>
      <NavBar />
      <div
        className="education-container"
        onClick={() => dispatch(handleNav(false))}
      >
        <div className="edu">
          <i id="user-edu" className="fa-solid fa-user-graduate"></i>
          <h1 id="edu-head">
            My <span style={{ color: "purple" }}>Education</span>
          </h1>
        </div>
        <p id="edu-quote">
          “Education is our passport to the future, for tomorrow belongs only to
          the people who prepare for it today.” —Malcolm X
        </p>
        <br />
        <div className="edu-set">
          {edulist.map((item, index) => {
            return (
              <div key={index} className="edu-details">
                <img id="uni-img" src={item.img} alt="" />
                <div className="info">
                  <h2 style={{ color: "blue" }}>{item.degree}</h2>
                  <p>{item.name}</p>
                  <p style={{ color: "green" }}>
                    {item.year} | {item.status}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
