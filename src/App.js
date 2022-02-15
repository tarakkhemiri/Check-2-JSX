import logo from "./logo.svg";
import "./App.css";
import myWonderfulImage from "./imageInSrc.jpg";
import "./style.css";
import React from "react";

function App() {
  return (
    <div>
      <div style={{ border: " solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>

        <br />

        <img src={myWonderfulImage} alt="myImage" />

        <br />

        <img src="/imageInPublic.jpg" alt="myimage" />
      </div>

      <video style={{ width: "320", height: "240" }}>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
