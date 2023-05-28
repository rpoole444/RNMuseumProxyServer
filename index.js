const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()

app.use('/api', createProxyMiddleware({
  target: 'https://openaccess-api.clevelandart.org',
  changeOrigin: true,
  pathRewrite: {
     [`^/api`]: '/api/artworks',
    }
  })
);

app.listen(3001);
