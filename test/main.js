var assert      = require('assert');
var should      = require('should');
var smtpapi     = require('../lib/main');
var t           = require('./smtpapi_test_strings.json');
var fs          = require('fs');

describe('smtapi', function() {
  beforeEach(function() {
    header = new smtpapi();
  });

  it('has a jsonString method', function() {
    header.jsonString().should.eql(t.json_string);
  });

  it('addTo', function() {
    header.addTo('addTo@mailinator.com');
    header.jsonString().should.eql(t.add_to);
  });

  it('setTos', function() {
    header.setTos(['setTos@mailinator.com']);
    header.jsonString().should.eql(t.set_tos);
  });

  it('addSubstitution', function() {
    header.addSubstitution('sub', 'val');
    header.jsonString().should.eql(t.add_substitution);
  });

  it('addSubstitution array value', function() {
    header.setSubstitutions({'sub': ['val 1']});
    header.addSubstitution('sub', ['val 2']);
    header.jsonString().should.eql(t.add_substitution_array_value);
  });

  it('setSubstitutions', function() {
    header.setSubstitutions({'sub': ['val']});
    header.jsonString().should.eql(t.set_substitutions);
  });

  it('addUniqueArg', function() {
    header.addUniqueArg('add_unique_argument_key', 'add_unique_argument_value');
    header.addUniqueArg('add_unique_argument_key_2', 'add_unique_argument_value_2');
    header.jsonString().should.eql(t.add_unique_arg);
  });

  it('setUniqueArgs', function() {
    header.setUniqueArgs({set_unique_argument_key: 'set_unique_argument_value'});
    header.jsonString().should.eql(t.set_unique_args);
  });

  it('addCategory', function() {
    header.addCategory('addCategory');
    header.addCategory('addCategory2');
    header.jsonString().should.eql(t.add_category);
  });

  it('addCategory', function() {
    header.addCategory(['addCategory']);
    header.jsonString().should.equal(t.add_category_array);
  });

  it('addCategoryUnicode', function() {
    header.addCategory('カテゴリUnicode');
    header.addCategory('カテゴリ2Unicode');
    header.jsonString().should.eql(t.add_category_unicode);
  });

  it('setCategories', function() {
    header.setCategories(['setCategories']);
    header.jsonString().should.eql(t.set_categories);
  });

  it('addSection', function() {
    header.addSection('set_section_key', 'set_section_value');
    header.addSection('set_section_key_2', 'set_section_value_2');
    header.jsonString().should.eql(t.add_section);
  });

  it('setSections', function() {
    header.setSections({'set_section_key': 'set_section_value'});
    header.jsonString().should.eql(t.set_sections);
  });

  it('addFilter', function() {
    header.addFilter('footer', 'text/html', '<strong>boo</strong>');
    header.jsonString().should.eql(t.add_filter);
  });

  it('setFilters', function() {
    var filter = {
      'footer': {
        'setting': {
          'enable': 1,
          'text/plain': 'You can haz footers!'
        }
      }
    };

    header.setFilters(filter);
    header.jsonString().should.eql(t.set_filters);
  });

  it('setSendAt', function() {
    header.setSendAt(1409348513);
    header.jsonString().should.eql(t.set_send_at);
  });

  it('setBatchId', function() {
    header.setBatchId('apples');
    header.jsonString().should.eql(t.set_batch_id);
  });

  it('setSendAt', function() {
    header.setSendEachAt([1409348513, 1409348514, 1409348515]);
    header.jsonString().should.eql(t.set_send_each_at);
  });

  it('addSendEachAt', function() {
    header.addSendEachAt(1409348513);
    header.addSendEachAt(1409348514);
    header.addSendEachAt(1409348515);
    header.jsonString().should.eql(t.add_send_each_at);
  });

  it('setSendEachAt and addSendEachAt', function() {
    header.setSendEachAt([1409348513]);
    header.addSendEachAt(1409348514);
    header.addSendEachAt(1409348515);
    header.jsonString().should.eql(t.add_send_each_at);
  });

  it('setASMGroupID', function() {
    header.setASMGroupID(123);
    header.jsonString().should.eql(t.set_asm_group_id);
  });

  it('setIpPool', function() {
    header.setIpPool('testPool');
    header.jsonString().should.eql(t.set_ip_pool);
  });
});

describe('smtapi-nodejs repo', function() {
  it('should have ./.env_sample file', function() {
    assert(fileExists('.env_sample'));
  });

  it('should have ./.gitignore file', function() {
    assert(fileExists('.gitignore'));
  });

  it('should have ./.github/workflows/test-and-deploy.yml file', function() {
    assert(fileExists('.github/workflows/test-and-deploy.yml'));
  });

  it('should have ./.codeclimate.yml file', function() {
    assert(fileExists('.codeclimate.yml'));
  });

  it('should have ./CHANGELOG.md file', function() {
    assert(fileExists('CHANGELOG.md'));
  });

  it('should have ./CODE_OF_CONDUCT.md file', function() {
    assert(fileExists('CODE_OF_CONDUCT.md'));
  });

  it('should have ./CONTRIBUTING.md file', function() {
    assert(fileExists('CONTRIBUTING.md'));
  });

  it('should have ./ISSUE_TEMPLATE.md file', function() {
    assert(fileExists('ISSUE_TEMPLATE.md'));
  });

  it('should have ./LICENSE file', function() {
    assert(fileExists('LICENSE'));
  });

  it('should have ./PULL_REQUEST_TEMPLATE.md file', function() {
    assert(fileExists('PULL_REQUEST_TEMPLATE.md'));
  });

  it('should have ./README.md file', function() {
    assert(fileExists('README.md'));
  });

  it('should have ./TROUBLESHOOTING.md file', function() {
    assert(fileExists('TROUBLESHOOTING.md'));
  });

  it('should have ./USAGE.md file', function() {
    assert(fileExists('USAGE.md'));
  });

  function fileExists(filepath) {
    try {
      return fs.statSync(filepath).isFile();
    } catch(e) {
      if (e.code === 'ENOENT') {
        console.log('' + filepath + ' doesn\'t exist.');
        return false;
      }
      throw e;
    }
  }
});
