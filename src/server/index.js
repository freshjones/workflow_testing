import compression from 'compression'
import express from 'express'
//import path from 'path'
import routing from './routing'
const app = express()
app.use(compression())
app.use('/static', express.static('dist'))
app.use('/static', express.static('public'))
routing(app)
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Server listening on', PORT);
});
