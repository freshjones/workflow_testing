'use strict';

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routing = require('./routing');

var _routing2 = _interopRequireDefault(_routing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
//import path from 'path'

app.use((0, _compression2.default)());
app.use('/static', _express2.default.static('dist'));
app.use('/static', _express2.default.static('public'));
(0, _routing2.default)(app);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Server listening on', PORT);
});