import Navbar from "./components/Navbar";
import News from "./components/News";
import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState({color: "black",background:"white"});
  const toggleChangeMode=()=>{
    if(mode.background=="white"){
      setMode({
        color: "white",
        background: "black"
      })
    }
    else{
      setMode({
        color: "black",
        background: "white"
      })
    }
  }
  return (
    <>
      <div
        style={{
          backgroundColor: mode.background,
          color: mode.color,
          minHeight: "100vh",
          transition: "all 0.3s ease",
        }}
      >
        <Router>
          <Navbar mode={mode} toggleChangeMode={toggleChangeMode} />
          <LoadingBar color="#f11946" progress={progress} />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={6}
                country="us"
                category="general"
                mode={mode}
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={6}
                country="us"
                category="business"
                mode={mode}
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={6}
                country="us"
                category="science"
                mode={mode}
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={6}
                country="us"
                category="sports"
                mode={mode}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={6}
                country="us"
                category="entertainment"
                mode={mode}
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={6}
                country="us"
                category="health"
                mode={mode}
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={6}
                country="us"
                category="technology"
                mode={mode}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
