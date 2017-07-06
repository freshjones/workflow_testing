'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _app = require('./../shared/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderApp = function renderApp(location, plainPartialState, routerContext) {
  var context = routerContext === undefined ? {} : routerContext;
  var HTML = _server2.default.renderToStaticMarkup(_react2.default.createElement(
    _reactRouter.StaticRouter,
    { location: location, context: context },
    _react2.default.createElement(_app2.default, null)
  ));
  return '<!doctype html>\n    <html>\n      <head>\n        <title>Ok corral</title>\n      </head>\n      <body>\n        <div class="app">' + HTML + '</div>\n        <script src="/static/js/bundle.js"></script>\n      </body>\n    </html>';
};

exports.default = renderApp;