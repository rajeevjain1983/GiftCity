// server.js
const express = require("express");
// const { parse } = require("url");
const next = require("next");
const { ROUTES_LIST } = require("./route.config");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();
const port = 3000;
app.prepare().then(() => {
  // Looping through the routes and providing the corresponding resolver route
  console.log("app.prepare()");
  ROUTES_LIST.forEach((route) => {
    console.log("route", route);
    server.get(route.path, (req, res) => {
      if (!route.params) {
        app.render(req, res, route.resolver, req.query);
        return;
      }

      // Handling routes with params
      const params = route.params.reduce((componentParam, paramKey) => {
        // eslint-disable-next-line no-param-reassign
        componentParam[paramKey] = req.params[paramKey];
        return componentParam;
      }, {});
      app.render(req, res, route.resolver, params);
    });
  });

  //   server.get("/", "/home");

  // handling of other routes
  server.get("*", (req, res) => {
    // TODO - To handle static files and all other routes here..
    // server.get('*', redirectToErrorPage);
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
