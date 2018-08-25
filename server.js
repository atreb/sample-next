// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel

const express = require('express'),
  app = express(),
  next = require('next'),
  dev = process.env.NODE_ENV !== 'production',
  nextApp = next({ dev }),
  nextHandle = nextApp.getRequestHandler(),
  parse = require('url').parse,
  PORT = process.env.PORT || 3000;

// custom server side only routing here
app.get('/_health', (req, res, next) => {
  res.send(':-) asd');
});

// default routing for nextjs
app.get('*', (req, res) => {
  const parsedUrl = parse(req.url, true);
  nextHandle(req, res, parsedUrl);
});

nextApp.prepare().then(() => {
  app.listen(PORT, () => {
    console.log(`> Up and running on port ${PORT}`);
  });
});
