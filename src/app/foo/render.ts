import * as React from "react";
import * as ReactDomServer from "react-dom/server";

export function render() {
  return ReactDomServer.renderToStaticMarkup(
    React.createElement("div", null, "Hello World")
  );
}
