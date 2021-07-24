---
sidebar_position: 4
---

# options

## Transient Props

In styled-components [it's recommended](https://styled-components.com/docs/api#transient-props) to prefix props but not required because they have some magic to determine whether your prop is destined for the DOM. Not tonami!

By default, Tonami prevents props beginning with `$` from being added to the DOM element. You can customize this by replacing the function `options.shouldForwardProp` with your own.

```tsx
import { styled, options } from "tonami";

// Write your own function here
options.shouldForwardProp = (key, value) => !(key[0] === "_");

interface Props {
  _p: number;
}

const Box = styled.div<Props>({
  padding: ({ _p }) => _p + "px",
});

function App() {
  return <Box _p={100}>Much padding wow</Box>;
}
```
