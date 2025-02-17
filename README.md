This is a reproduction repo of [an issue](https://github.com/vercel/next.js/issues/76111) I filed in vercel/nextjs.

```bash
npm i
npm run dev

# visit http://localhost:3000/foo to see the error both in the terminal and also the browser
```

**Error**

```
Ecmascript file had an error
  1 | import * as React from "react";
> 2 | import * as ReactDomServer from "react-dom/server";
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  3 |
  4 | export function render() {
  5 |   return ReactDomServer.renderToStaticMarkup(

You're importing a component that imports react-dom/server. To fix it, render or return the content directly as a Server Component instead for perf and security.
Learn more: https://nextjs.org/docs/app/building-your-application/rendering
```
