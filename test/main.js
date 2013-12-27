var assert      = require('assert'),
    should      = require('should'),
    smtpapi     = require('../lib/main');

var result;

describe('smtapi', function() {
  before(function() {
    result = smtpapi;
  });

  it('version should be set', function() {
    result.version.should.eql("0.0.1"); 
  });

  describe('.Header', function() {
    it('has a toJsonString method', function() {
      var header = new smtpapi.Header();

      header.toJsonString().should.eql('{}');
    });

    it('addTo', function() {
      var header = new smtpapi.Header();

      header.addTo('addTo@mailinator.com');
      header.toJsonString().should.eql('{"to":["addTo@mailinator.com"]}');
    });

    it('addSubVal', function() {
      var header = new smtpapi.Header();

      header.addSubVal('sub', 'val');
      header.toJsonString().should.eql('{"sub":{"sub":["val"]}}');
    });

    it('setUniqueArgs', function() {
      var header = new smtpapi.Header();

      header.setUniqueArgs({set_unique_argument_key: 'set_unique_argument_value'});
      header.toJsonString().should.eql("{\"unique_args\":{\"set_unique_argument_key\":\"set_unique_argument_value\"}}");
    });

    it('addUniqueArgs', function() {
      var header = new smtpapi.Header();

      header.addUniqueArgs({add_unique_argument_key: 'add_unique_argument_value'});
      header.addUniqueArgs({add_unique_argument_key_2: 'add_unique_argument_value_2'});
      header.toJsonString().should.eql("{\"unique_args\":{\"add_unique_argument_key\":\"add_unique_argument_value\",\"add_unique_argument_key_2\":\"add_unique_argument_value_2\"}}");
    });

    it('setCategory', function() {
      var header = new smtpapi.Header();

      header.setCategory('setCategory');
      header.toJsonString().should.eql("{\"category\":[\"setCategory\"]}");
    });

    it('addCategory', function() {
      var header = new smtpapi.Header();

      header.addCategory('addCategory');
      header.addCategory('addCategory2');
      header.toJsonString().should.eql("{\"category\":[\"addCategory\",\"addCategory2\"]}");
    });

    it('setSection', function() {
      var header = new smtpapi.Header();

      header.setSection({'set_section_key': 'set_section_value'});
      header.toJsonString().should.eql("{\"section\":{\"set_section_key\":\"set_section_value\"}}");
    });

    it('addSection', function() {
      var header = new smtpapi.Header();

      header.addSection({'set_section_key': 'set_section_value'});
      header.addSection({'set_section_key_2': 'set_section_value_2'});
      header.toJsonString().should.eql("{\"section\":{\"set_section_key\":\"set_section_value\",\"set_section_key_2\":\"set_section_value_2\"}}");
    });

    it('setFilterSetting', function() {
      var header = new smtpapi.Header();

      var filter = {
        'footer': {
          'setting': {
            'enable': 1,
            'text/plain': 'You can haz footers!'
          }
        }
      }

      header.setFilterSetting(filter);
      header.toJsonString().should.eql("{\"filters\":{\"footer\":{\"setting\":{\"enable\":1,\"text/plain\":\"You can haz footers!\"}}}}");
    });

    it('addFilterSetting', function() {
      var header = new smtpapi.Header();

      header.addFilterSetting('footer', 'text/html', '<strong>boo</strong>');
      header.toJsonString().should.eql("{\"filters\":{\"footer\":{\"settings\":{\"text/html\":\"<strong>boo</strong>\"}}}}");
    });

  });
});
