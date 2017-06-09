const express = require('express')
const path = require('path')
const app = express();

var sum = require('./../client/sum')

app.use('/static', express.static('dist'))
app.use("/", function (req, res) {
  const title = 'Hello World'
  const app = 'OK HELLO WORLD'
  var testSum = sum(5,5)
  const HTML = `
     <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${title}</title>
        </head>
        <body>
          <div>${testSum}</div>
          <script type="application/javascript" src="/static/js/bundle.js"></script>
        </body>
      </html>
    `
  res.send(HTML)
});

module.exports = app;
