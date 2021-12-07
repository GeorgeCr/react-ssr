import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { matchPath } from "react-router-dom";
import App from "../../App";
import routes from "../../routes";

export default async function ssr(req, res) {
  const activeRoute =
    routes.find((route) => matchPath(route.path, req.url)) || {};
  const data = activeRoute.fetchInitialData
    ? await activeRoute.fetchInitialData(req)
    : await Promise.resolve();
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App data={data} />
    </StaticRouter>
  );
  res.send(`<html>
        <head>
            <title>SSR React</title>
            <script defer src="/bundle.js"></script>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>window.__INITIAL__DATA = ${JSON.stringify(data)}</script>
        </body>
    </html>`);
}
