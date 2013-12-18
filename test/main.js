var assert      = require('assert'),
    should      = require('should'),
    xsmtpapi    = require('../lib/main');

var result;

describe('xsmtapi', function() {
  before(function() {
    result = xsmtpapi;
  });

  it('version should be set', function() {
    result.version.should.eql("0.0.1"); 
  });
});
