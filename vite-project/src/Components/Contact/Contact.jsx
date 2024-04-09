import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import NavBar from "../Navbar/NavBar";
import { useDispatch } from "react-redux";
import { handleClick } from "../../reducers/snackbar/snackbar";
export default function Contact() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.name == "" ||
      data.email == "" ||
      data.mobile == "" ||
      data.message == ""
    ) {
      dispatch(
        handleClick({
          message: "Fields can't be empty!!",
          severity: "error",
        })
      );
      return;
    }
    const serviceId = "service_y7cw84e";
    const templateId = "template_s5ljac9";
    const publicKey = "RSOPWK6htDO8kgS21";
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: "Athar Siddiqui",
      message: data.message,
      from_mobile: data.mobile,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log(response);
        setData({ name: "", email: "", mobile: "", message: "" });
        dispatch(
          handleClick({
            message: "Email Sent Successfully",
            severity: "success",
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavBar />
      <div className="contact-container">
        <div className="contact-header">
          <i id="contact-icon" className="fa-solid fa-headset"></i>
          <h1 id="text">
            Get In <span style={{ color: "#7303a7" }}>Touch</span>
          </h1>
        </div>
        <div className="contact-main">
          <img id="contact-img" src="/contact.jpg" alt="" />
          <div className="forms">
            <form className="form">
              <input
                className="input-tags"
                placeholder="Name"
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
              <input
                className="input-tags"
                placeholder="E-mail"
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
              <input
                className="input-tags"
                placeholder="Mobile Number"
                type="text"
                value={data.mobile}
                name="mobile"
                onChange={handleChange}
              />
              <input
                className="input-tags"
                name="message"
                placeholder="Message"
                value={data.message}
                type="text"
                onChange={handleChange}
              />
            </form>
            <button onClick={handleSubmit} className="sub-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
