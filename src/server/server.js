const express = require('express')
const path = require('path')
const app = express();

var sum = require('./../client/sum')

app.use(compression())

app.use('/static', express.static('dist'))
app.use("/", function (req, res) {
  const title = 'Hello World'
  
  var testSum = sum(5,3)
  const app = `OK HELLO WORLD: ${testSum}`
  const HTML = `
     <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${title}</title>
        </head>
        <body>
          <div>${app}</div>
          <script type="application/javascript" src="/static/js/bundle.js"></script>
        </body>
      </html>
    `
  res.send(HTML)
});

module.exports = app;
