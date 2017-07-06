'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _renderApp = require('./render-app');

var _renderApp2 = _interopRequireDefault(_renderApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

  app.get('/', function (req, res) {
    res.send((0, _renderApp2.default)(req.url));
  });

  app.get('/other*', function (req, res) {
    res.send((0, _renderApp2.default)(req.url));
  });
};