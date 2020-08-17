import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Suggestedvids from "./Suggestedvids";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchresults from "./Searchresults";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [searchValue, setsearchValue] = useState("");

  const setShowSidebarWrapper = () => {
    setShowSidebar(!showSidebar);
  };

  const setVal = (text) => {
    setsearchValue(text);
  };

  return (
    <div className="App">
      <Router>
        <Header setsearchValue={setVal} toggleSidebar={setShowSidebarWrapper} />
        <div className="bodyContent">
          {showSidebar && <Sidebar />}
          <Switch>
            <Route path="/search">
              <Searchresults searchValue={searchValue} />
            </Route>
            <Route path="/">
              <Suggestedvids />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
