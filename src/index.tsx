import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";


import "./examples/1.variables";
// import "./examples/2.functions";
// import "./examples/3.classes";
// import "./examples/4.tuples";
// import "./examples/5.enums";
// import "./examples/6.interfaces";
// import "./examples/7.generics";
// import "./examples/8.fetch";
// import "./examples/9.escape_hatches";

// import runVariables from "./examples/";
// runVariables();

// import runInterfaces from "./examples/interfaces";
// runInterfaces();

import "./examples/1.variables";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
