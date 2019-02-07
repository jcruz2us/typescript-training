import * as React from "react";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={"https://www.hipmunk.com/static/jobs/images/chippy.png"}
            className="App-logo"
            alt="logo"
          />
          <p>Welcome to TypeScript Nerd Training!</p>
        </header>
      </div>
    );
  }
}

export default App;
