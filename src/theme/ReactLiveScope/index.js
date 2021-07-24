import React from "react";
import { styled, createGlobalStyle, createTokens } from "tonami";

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...tonami,
  styled,
  createGlobalStyle,
  createTokens,
};

export default ReactLiveScope;
