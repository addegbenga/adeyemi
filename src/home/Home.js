import React, { useState } from "react";
import "./homeStyle.css";

export default function Home() {
  const [data, setData] = useState([
    {
      title: "Web dev",
      name: "Project one",
      id: 1,
    },
    {
      title: "Web dev",
      name: "Project one",
      id: 1,
    },
    {
      title: "Web dev",
      name: "Project one",
      id: 1,
    },
  ]);
  const [count, setCount] = useState(0);

  const handleNext = () => {
    if (data.length - 1 === count) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <div className="home-container">
      <div className="home-inner-container">
        <h3>{data[count].title}</h3>
        <h1>{data[count].name}</h1>
        <button onClick={handleNext}></button>
      </div>
    </div>
  );
}
