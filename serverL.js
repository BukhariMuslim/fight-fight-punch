var serve = require('serve');

var htmlserver = serve('./', {
  port: process.env.PORT || 3000
});