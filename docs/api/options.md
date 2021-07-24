---
sidebar_position: 4
---

# options

## Transient Props

In styled-components [it's recommended](https://styled-components.com/docs/api#transient-props) to prefix props but not required because they have some magic to determine whether your prop is destined for the DOM. Not tonami!

By default, Tonami prevents props beginning with `$` from being added to the DOM element. You can customize this by replacing the function `options.shouldForwardProp` with your own.

```jsx live noInline
// import { styled, options } from "tonami";

// Write your own function here
options.shouldForwardProp = (key, value) => !(key[0] === "_");

const Box = styled.div({
  padding: ({ _p }) => _p + "px",
});

render(<Box _p={50}>Much padding so wow</Box>);
```
