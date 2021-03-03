import React, { useEffect, useState } from "react";

import "./homepage.styles.scss";

const HomePage = () => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
    document.title = "PlantZo";
  }, []);

  return (
    <div className="home">
      <header className="App-header">
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
};

export default HomePage;
