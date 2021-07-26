import { styled } from "tonami";

export const TweetWrapper = styled.div({
  textAlign: "center",
  padding: "1rem",
  backgroundColor: "var(--ifm-color-primary)",
  borderRadius: "10px",
  marginBlockEnd: "1rem",
  selectors: {
    "@media(min-width: 700px) { & > div {} }": {
      display: "inline-block",
      minWidth: "400px",
    },
  },
});
