import React from "react";
import Titles from "./components/Titles"
import Dashboard from "./components/dashboard"

class App extends React.Component {
  render() {
    return(
      <div className="container app-wrapper center">
        <Titles/>
        <Dashboard/>
      </div>
      );
  }
};

export default App;
