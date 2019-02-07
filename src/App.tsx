// import React, { Component } from 'react';
import * as React from "react";
import "./App.css";
import logo from "./logo.svg";

export interface IProps {
  name?: string;
}

interface IAppState {
  title: string;
  count: number;
}

class App extends React.Component<IProps, IAppState> {
  protected static defaultProps = {
    name: "foo",
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
      title: "Master React!",
    };
  }

  public render() {
    const { count, title } = this.state;
    const { name } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Click Count: {count} <button onClick={this.increaseCount}>+</button>
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title} {name}
          </a>
        </header>
      </div>
    );
  }

  private increaseCount = () => {
    this.setState(state => {
      const { count } = state;
      return {
        // ...state,
        count: count + 1,
      };
    });
  };
}

export default App;
