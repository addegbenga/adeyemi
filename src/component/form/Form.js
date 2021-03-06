import React, { useState } from "react";

export default function Form({ setForm }) {
  const [formdata, setformData] = useState({
    email: "",
    message: "",
  });
  const { email, message } = formdata;
  const onChange = (e) => {
    setformData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      email,
      message,
    };
    console.log(details);
    setForm(false);
  };
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      setForm(false);
    }
  };

  return (
    <div className="form-container" onClick={(e) => handleClick(e)}>
      {/* <div className="form-wrapper"> */}
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email"
          />
          <textarea
            type="text"
            name="message"
            value={message}
            placeholder="Enter your message"
            onChange={onChange}
          ></textarea>
          <button>Submit</button>
        </form>
      {/* </div> */}
    </div>
  );
}
