---
sidebar_position: 2
---

# Learn by Comparison

A brief overview of tonami for people familiar with styled-components, emotion, or goober.

tonami has two familiar API's

- [styled](#styled)
- [createGlobalStyle](#createglobalstyle)

and one unfamiliar one

- [createTokens](#createtokens)

## styled

### Uses objects

In styled-components, emotion, or goober

```jsx
const Type = styled.span`
  font-family: cursive;
`;
```

In tonami

```jsx
const Type = styled.span({ fontFamily: "cursive" });
```

### Expects prefixed props

In styled-components, emotion, or goober

```jsx
const Type = styled.span`
  fontfamily: ${({ fam }) => fam};
`;
```

In tonami

```jsx
const Type = styled.span({ fontFamily: ({ $fam }) => $fam });
```

[Learn More](/api/options#transient-props)

### Accepts multiple, conditional arguments

In styled-components, emotion, or goober

```jsx
const Type = styled.span`
  fontfamily: cursive;
  ${({ isAlert }) => (isAlert ? `color: red; font-weight: bold;` : ``)}
`;
```

In tonami

```jsx {6}
const Type = styled.span(
  { fontFamily: "cursive" },
  {
    color: "red",
    fontWeight: "bold",
    condition: ({ $isAlert }) => $isAlert,
  }
);
```

### Supports selectors

In styled-components, emotion, or goober

```jsx
const Type = styled.span`
  font-family: cursive;

  @media (min-width: 800px) {
    font-size: 3em;
  }
`;
```

In tonami

```jsx
const Type = styled.span({
  fontFamily: "cursive",
  selectors: {
    "@media (min-width: 800px) { & {} }": {
      fontSize: "3em",
    },
  },
});
```

### Supports implicit attribute styling

In styled-components, emotion, or goober

```jsx
const Input = styled.input`
  &:disabled {
    opacity: 0.5;
  }
`;

function App({ isLoading }) {
  return <Input disabled={isLoading} />;
}
```

In tonami

```jsx {4}
const Input = styled.input({
  opacity: 0.5,
  condition: ({ $isLoading }) => $isLoading,
  apply: { disabled: true },
});

function App({ isLoading }) {
  return <Input $isLoading={isLoading} />;
}
```

## createGlobalStyle

### Uses objects, expects prefixed props

In styled-components, emotion, or goober

```jsx
const Global = createGlobalStyle`
  html {
    font-family: monospace;
  }
  a {
    color: ${({ color }) => color};
  }
`;
```

In tonami

```jsx
const Global = createGlobalStyle({
  html: {
    fontFamily: "monospace",
  },
  a: {
    color: ({ $color }) => $color,
  },
});
```

- Expects prefixed props

## createTokens

[View the documentation](/api/createTokens)
