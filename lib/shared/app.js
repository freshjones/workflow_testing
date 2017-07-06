'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouterDom = require('react-router-dom');

var _home = require('./component/page/home');

var _home2 = _interopRequireDefault(_home);

var _other = require('./component/page/other');

var _other2 = _interopRequireDefault(_other);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactRouter.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {
          return _react2.default.createElement(_home2.default, null);
        } }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/other*', render: function render() {
          return _react2.default.createElement(_other2.default, null);
        } })
    )
  );
};
exports.default = App;