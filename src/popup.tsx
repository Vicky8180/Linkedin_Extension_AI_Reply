import React from "react";
import ReactDOM from "react-dom";

function Popup() {
  return (
    <div>
      <h1>Hello From Anoop</h1>
    </div>
  );
}

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<Popup />, root);
