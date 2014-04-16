var assert      = require('assert');
var should      = require('should');
var smtpapi     = require('../lib/main');
var t           = require('./smtpapi_test_strings.json');

var result;

describe('smtapi', function() {
  before(function() {
    result = smtpapi;
  });

  it('version should be set', function() {
    result.version.should.eql("0.0.2"); 
  });

  describe('.Header', function() {
    it('has a jsonString method', function() {
      var header = new smtpapi.Header();

      header.jsonString().should.eql(t.json_string);
    });

    it('addTo', function() {
      var header = new smtpapi.Header();

      header.addTo('addTo@mailinator.com');
      header.jsonString().should.eql(t.add_to);
    });

    it('setTos', function() {
      var header = new smtpapi.Header();

      header.setTos(['setTos@mailinator.com']);
      header.jsonString().should.eql(t.set_tos);
    });

    it('addSubstitution', function() {
      var header = new smtpapi.Header();

      header.addSubstitution('sub', 'val');
      header.jsonString().should.eql(t.add_substitution);
    });

    it('setSubstitutions', function() {
      var header = new smtpapi.Header();

      header.setSubstitutions({'sub': ['val']});
      header.jsonString().should.eql(t.set_substitutions);
    });

    it('addUniqueArg', function() {
      var header = new smtpapi.Header();

      header.addUniqueArg({add_unique_argument_key: 'add_unique_argument_value'});
      header.addUniqueArg({add_unique_argument_key_2: 'add_unique_argument_value_2'});
      header.jsonString().should.eql(t.add_unique_arg);
    });

    it('setUniqueArgs', function() {
      var header = new smtpapi.Header();

      header.setUniqueArgs({set_unique_argument_key: 'set_unique_argument_value'});
      header.jsonString().should.eql(t.set_unique_args);
    });

    it('addCategory', function() {
      var header = new smtpapi.Header();

      header.addCategory('addCategory');
      header.addCategory('addCategory2');
      header.jsonString().should.eql(t.add_category);
    });

    it('addCategoryUnicode', function() {
      var header = new smtpapi.Header();

      header.addCategory('カテゴリUnicode');
      header.addCategory('カテゴリ2Unicode');
      header.jsonString().should.eql(t.add_category_unicode);
    });

    it('setCategories', function() {
      var header = new smtpapi.Header();

      header.setCategories(['setCategories']);
      header.jsonString().should.eql(t.set_categories);
    });

    it('addSection', function() {
      var header = new smtpapi.Header();

      header.addSection({'set_section_key': 'set_section_value'});
      header.addSection({'set_section_key_2': 'set_section_value_2'});
      header.jsonString().should.eql(t.add_section);
    });

    it('setSections', function() {
      var header = new smtpapi.Header();

      header.setSections({'set_section_key': 'set_section_value'});
      header.jsonString().should.eql(t.set_sections);
    });

    it('addFilter', function() {
      var header = new smtpapi.Header();

      header.addFilter('footer', 'text/html', '<strong>boo</strong>');
      header.jsonString().should.eql(t.add_filter);
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
      header.jsonString().should.eql(t.set_filters);
    });
  });
});
