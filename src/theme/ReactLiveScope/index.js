import React from "react";
import * as tonami from "tonami";

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...tonami,
};

export default ReactLiveScope;
