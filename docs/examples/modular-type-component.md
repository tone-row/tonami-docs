---
sidebar_position: 1
---

# Modular Type Component

```jsx live noInline
const base = 16;
const scale = 1.33;

const Type = styled.span({
  fontSize: ({ $size = 0 }) => Math.pow(scale, $size) * base + "px",
});

render(
  <div>
    <Type>Size 0</Type>
    <Type $size={1}>Size 1</Type>
    <Type $size={2}>Size 2</Type>
    <Type $size={3}>Size 3</Type>
    <Type $size={4}>Size 4</Type>
    <Type $size={5}>Size 5</Type>
  </div>
);
```
