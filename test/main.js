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
    it('has a jsonString method', function() {
      var header = new smtpapi.Header();

      header.jsonString().should.eql('{}');
    });

    it('addTo', function() {
      var header = new smtpapi.Header();

      header.addTo('addTo@mailinator.com');
      header.jsonString().should.eql('{"to":["addTo@mailinator.com"]}');
    });

    it('addSubstitution', function() {
      var header = new smtpapi.Header();

      header.addSubstitution('sub', 'val');
      header.jsonString().should.eql('{"sub":{"sub":["val"]}}');
    });

    it('setUniqueArgs', function() {
      var header = new smtpapi.Header();

      header.setUniqueArgs({set_unique_argument_key: 'set_unique_argument_value'});
      header.jsonString().should.eql('{"unique_args":{"set_unique_argument_key":"set_unique_argument_value"}}');
    });

    it('addUniqueArg', function() {
      var header = new smtpapi.Header();

      header.addUniqueArg({add_unique_argument_key: 'add_unique_argument_value'});
      header.addUniqueArg({add_unique_argument_key_2: 'add_unique_argument_value_2'});
      header.jsonString().should.eql('{"unique_args":{"add_unique_argument_key":"add_unique_argument_value","add_unique_argument_key_2":"add_unique_argument_value_2"}}');
    });

    it('setCategories', function() {
      var header = new smtpapi.Header();

      header.setCategories(['setCategory']);
      header.jsonString().should.eql('{"category":["setCategory"]}');
    });

    it('addCategory', function() {
      var header = new smtpapi.Header();

      header.addCategory('addCategory');
      header.addCategory('addCategory2');
      header.jsonString().should.eql('{"category":["addCategory","addCategory2"]}');
    });

    it('setSections', function() {
      var header = new smtpapi.Header();

      header.setSections({'set_section_key': 'set_section_value'});
      header.jsonString().should.eql('{"section":{"set_section_key":"set_section_value"}}');
    });

    it('addSection', function() {
      var header = new smtpapi.Header();

      header.addSection({'set_section_key': 'set_section_value'});
      header.addSection({'set_section_key_2': 'set_section_value_2'});
      header.jsonString().should.eql('{"section":{"set_section_key":"set_section_value","set_section_key_2":"set_section_value_2"}}');
    });

    it('setFilters', function() {
      var header = new smtpapi.Header();

      var filter = {
        'footer': {
          'setting': {
            'enable': 1,
            'text/plain': 'You can haz footers!'
          }
        }
      }

      header.setFilters(filter);
      header.jsonString().should.eql('{"filters":{"footer":{"setting":{"enable":1,"text/plain":"You can haz footers!"}}}}');
    });

    it('addFilter', function() {
      var header = new smtpapi.Header();

      header.addFilter('footer', 'text/html', '<strong>boo</strong>');
      header.jsonString().should.eql('{"filters":{"footer":{"settings":{"text/html":"<strong>boo</strong>"}}}}');
    });

  });
});
