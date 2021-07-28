---
sidebar_position: 5
---

# ServerStylesheet

The `<ServerStylesheet />` will help you render your styles on the server in SSR environemnts

## Next.js

This is an example `_document.tsx` in a Next.js (Typescript) environment

```tsx {20}
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <ServerStylesheet />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```
