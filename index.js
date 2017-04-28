'use strict';

var app = require('angular').module('app2');
app.service('AdminCRUDService',  require('./admin-crud-service'));
app.service('AuthService',  require('./auth-service'));
