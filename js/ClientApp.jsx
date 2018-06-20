import React from "react";
import { render } from "react-dom";

const ClientApp = function() {
  return (
    <div>Hello World</div>
  );
};
render(<ClientApp />, document.getElementById("app"));
