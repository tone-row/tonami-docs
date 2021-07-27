---
sidebar_position: 1
---

# Modular Type Component

```jsx live noInline
const base = 16;
const scale = 1.33;

const Typography = styled.span({
  fontSize: ({ $size = 0 }) => Math.pow(scale, $size) * base + "px",
});

render(
  <div>
    <Typography>Size 0</Typography>
    <Typography $size={1}>Size 1</Typography>
    <Typography $size={2}>Size 2</Typography>
    <Typography $size={3}>Size 3</Typography>
    <Typography $size={4}>Size 4</Typography>
    <Typography $size={5}>Size 5</Typography>
  </div>
);
```
