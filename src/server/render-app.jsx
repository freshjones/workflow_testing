import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Helmet from 'react-helmet'
import { StaticRouter } from 'react-router'
import App from './../shared/app'
const renderApp = function(location, plainPartialState, routerContext) {
  let context = routerContext === undefined ? {} : routerContext;
  const HTML = ReactDOMServer.renderToStaticMarkup(
    <StaticRouter location={location} context={context}>
      <App />
    </StaticRouter>
  )
  const head = Helmet.renderStatic();

  return (
    `<!doctype html>
    <html>
      <head>
        ${head.title.toString()}
        ${head.meta.toString()}
      </head>
      <body>
        <div class="app">${HTML}</div>
        <script src="/static/js/bundle.js"></script>
      </body>
    </html>`
  )

}

export default renderApp
