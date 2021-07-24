---
sidebar_position: 2
---

(Again) borrowed from the likes of styled-components and goober, `createGlobalStyle` provides a way to style things that may be outside of your react tree or may not make sense to encapsulate under a component.

`createGlobalStyle` accepts an object whose keys are CSS Selectors and whose properties are rulesets.

## Basic Usage

```jsx live noInline
const Global = createGlobalStyle({
  "span.my-custom-selector": {
    color: "limegreen",
    fontFamily: "monospace",
    fontSize: "60px",
  },
});

render(
  <>
    <Global />
    <span className="my-custom-selector">Hallo Welt</span>
  </>
);
```

## Clean Up 🧹

Global styles are only on the DOM as long as the component is mounted. For instance...

```jsx live noInline
const Global = createGlobalStyle({
  body: {
    textTransform: "uppercase",
  },
});
render(() => {
  const [mount, toggleMount] = useReducer((x) => !x, false);
  return (
    <div>
      {mount && <Global />}
      <button onClick={toggleMount}>Toggle</button>
      <hr />
      <span>Styles are {mount ? "mounted" : "not mounted"}</span>
    </div>
  );
});
```

## Dynamic Global Styles

You can define property values as a function of the props passed to the component `createGlobalStyles` returns.

```jsx live noInline
const Blurry = createGlobalStyle({
  html: {
    filter: ({ $isBlurry = false }) => ($isBlurry ? "blur(3px)" : ""),
  },
});

render(() => {
  const [blurry, setBlurry] = useState(false);

  return (
    <>
      <Blurry $isBlurry={blurry} />
      <button onClick={() => setBlurry(!blurry)}>Toggle</button>
    </>
  );
});
```
