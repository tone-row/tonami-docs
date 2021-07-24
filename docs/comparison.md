---
sidebar_position: 2
---

# Fast Comparison

A brief overview of Tonami for people familiar with styled-components/emotion/goober.

Tonami has two familiar API's:

- [styled](/api/styled)
- [createGlobalStyle](/api/createGlobalStyle)

And one new one:

- [createTokens](/api/createTokens)

## Familiar API's

### Objects instead of Tagged Template Literals

In styled-components/emotion/goober...

```jsx
const Type = styled.span`
  font-family: cursive;
`;
```

In tonami:

```jsx
const Type = styled.span({ fontFamily: "cursive" });
```

### <u>Always</u> prefix props with `$`

This is fine in styled components:

```jsx
const Type = styled.span`
  fontfamily: ${({ fam }) => fam};
`;
```

In tonami it's gotta be: [(Read More)](/api/options#transient-props)

```jsx
const Type = styled.span({ fontFamily: ({ $fam }) => $fam });
```

### ✅ Multiple arguments + `condition`<br/> ❌ Functions returning rulesets

In styled-components/emotion/goober:

```jsx
const Type = styled.span`
  fontfamily: cursive;
  ${({ isAlert }) => (isAlert ? `color: red; font-weight: bold;` : ``)}
`;
```

In tonami:

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

### ✅ `selectors` + `& {}`<br/>❌ Stylis

In styled-components/emotion/goober...

```jsx
const Type = styled.span`
  font-family: cursive;

  @media (min-width: 800px) {
    font-size: 3em;
  }
`;
```

In tonami:

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
