import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";
import GetInfo from "./src/GetInfo";
import { Typewriter } from "react-simple-typewriter";

function App() {
  const [pid, setPid] = useState("");
  const [curid, setCurid] = useState("");
  const [dark, setDark] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sty = {
    background: "transparent",
    border: dark ? "1px solid white" : "1px solid black",
    color: isHovered ? (dark ? "black" : "white") : dark ? "white" : "black",
    borderRadius: "7px",
    backgroundColor: isHovered ? (dark ? "white" : "black") : "transparent",
  };

  const body = document.body;
  body.style.background = dark ? "black" : "rgb(235, 235, 235)";

  useEffect(() => {}, []);
  return (
    <div className="container">
      <div id="inner">
        <div id="type">
          <div>
            <h1
              id="heading"
              style={{ color: dark ? "rgb(16, 239, 243)" : "#2d3436" }}
            >
              {" "}
              GitHub Profile Finder
            </h1>
          </div>
          {/* <Typewriter
            words={['GitHub','Profile','Finder']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
            /> */}
          <div>
            <button
              id="dark-mode"
              style={sty}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setDark(!dark)}
            >
              {dark ? "☼" : "⏾"}
            </button>
          </div>
        </div>
        <div id="inp">
          <input
            id="textbox"
            style={{
              backgroundColor: dark
                ? "rgb(198, 196, 196)"
                : "rgba(221, 221, 221, 0.86)",
              color: "black",
            }}
            placeholder="Username..."
            type="text"
            value={pid}
            onChange={(e) => setPid(e.target.value)}
          ></input>
          <button
            style={{
              backgroundColor: dark ? "rgb(16, 239, 243)" : "#16a085",
              color: dark ? "black" : "white",
            }}
            onClick={() => {
              setCurid(pid);
            }}
          >
            Search
          </button>
        </div>

        {curid && curid.length > 0 ? <GetInfo prop={curid} dark={dark} /> : null}
      </div>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
