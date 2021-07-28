import React from "react";
import { styled } from "tonami";

const IframeWrapperContainer = styled.div({
  border: "2px solid var(--ifm-color-emphasis-200)",
  borderRadius: "5px",
  overflow: "hidden",
  backgroundColor: "white",
  selectors: {
    "& header {}": {
      padding: ".5rem",
      backgroundColor: "var(--ifm-color-emphasis-200)",
    },
    "& header a {}": {
      color: "inherit",
    },
  },
});
export const IframeWrapper = ({ children, url }) => {
  return (
    <IframeWrapperContainer>
      <header>
        <a href={url} target="_blank">
          {url}
        </a>
      </header>
      {children}
    </IframeWrapperContainer>
  );
};
