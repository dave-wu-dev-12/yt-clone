import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Suggestedvids from "./Suggestedvids";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  const setShowSidebarWrapper = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="App">
      <Header toggleSidebar={setShowSidebarWrapper} />
      <div className="bodyContent">
        {showSidebar && <Sidebar />}
        <Suggestedvids />
      </div>
    </div>
  );
}

export default App;
