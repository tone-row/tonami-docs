---
sidebar_position: 3
---

# createTokens

_Tokens_ refers to CSS Variables or CSS Custom Properties. `createTokens` centralizes how you declare, access, and update custom properties in your website or app. The goal is to make themeing easier.

## Basic Usage

```jsx live noInline
/* src/theme.js */
const brandColors = {
  blue: "#0B50AA",
  orange: "#EC5D25",
  gray: "#758CAA",
};

const shape = {
  padding: "12px",
  smallRadius: "2px",
  largeRadius: "10px",
};

const theme = createTokens({ brandColors, shape });

/* src/App.js */

// import { theme } from './theme'
const { Tokens } = theme;

const Box = styled.div({
  padding: theme.shape.padding,
  background: theme.brandColors.orange,
  borderRadius: theme.shape.largeRadius,
});

render(
  <>
    <Tokens />
    <Box>Hello World</Box>
  </>
);
```

If you look at the style of the box created above you'll see something like:

```css
.TA1203f594.TA80c539bc {
  padding: var(--shape-padding);
  background: var(--brandColors-orange);
  border-radius: var(--shape-largeRadius);
}
```

## Accessor

The main return value of create tokens is simply an accessor that mirrors the shape of the object you pass in. Instead of returning the values you pass, it returns the custom property created to store that variable. We can see what that looks like here.

```jsx live noInline
const theme = createTokens({
  a: "red",
  b: "15px",
  deeply: { nested: { object: { zIndex: 999 } } },
});

render(<pre>{JSON.stringify(theme, null, 2)}</pre>);
```

## Attaching the Tokens

Inside of the accessor there are a couple of other objects for use. The main one is the `<Tokens />` component. This component is responsible for writing the CSS Custom Properties to the DOM, so if it's not mounted, using your tokens will have no effect. We can see that in this example:

```jsx live noInline
const theme = createTokens({ prettyCoolFont: "monospace" });
const { Tokens } = theme;
const Text = styled.h1({ fontFamily: theme.prettyCoolFont });

render(() => {
  const [m, toggle] = useReducer((x) => !x, true);
  return (
    <>
      <button onClick={toggle}>{`Toggle <Tokens/>`}</button>
      <input type="checkbox" checked={m} />
      {m && <Tokens />}
      <Text>Howdy Podner</Text>
    </>
  );
});
```
