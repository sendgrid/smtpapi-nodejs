"use strict";

var package_json  = require('./../package.json');

function xsmtpapi() {
  var xsmtpapi = {
    version:          package_json.version,
    environment:      process.env.NODE_ENV || "development"
  }

  return xsmtpapi;
}

module.exports = xsmtpapi();
