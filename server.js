// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel

const express = require('express'),
  app = express(),
  next = require('next'),
  dev = process.env.NODE_ENV !== 'production',
  nextApp = next({ dev, useFileSystemPublicRoutes: false }),
  nextHandle = nextApp.getRequestHandler(),
  parse = require('url').parse,
  PORT = process.env.PORT || 3000;

// custom server side only routing here
app.use(require('./routers/serverOnly'));

// custom isomorphic routing
const isomorphicRoutes = require('./routers/isomorphic');
Object.keys(isomorphicRoutes).forEach(path => {
  console.log(path, isomorphicRoutes[path]);
  app.get(path, (req, res) => {
    return nextApp.render(req, res, `/${isomorphicRoutes[path]}`, req.query);
  });
});

// default page routing for nextjs
app.get('*', (req, res) => {
  const parsedUrl = parse(req.url, true);
  nextHandle(req, res, parsedUrl);
});

nextApp.prepare().then(() => {
  app.listen(PORT, () => {
    console.log(`> Up and running on port ${PORT}`);
  });
});
