import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Helmet from 'react-helmet'
import { StaticRouter } from 'react-router'
import App from './../shared/app'
import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const renderApp = function(location, plainPartialState, routerContext) {
  let context = routerContext === undefined ? {} : routerContext;
  const HTML = ReactDOMServer.renderToString(
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
        <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${HTML}</div>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
  )
}

export default renderApp
