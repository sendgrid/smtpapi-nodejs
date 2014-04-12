"use strict";

var package_json  = require('./../package.json');
var _             = require('lodash');

function Header() {
  this.to           = [];
  this.sub          = {};
  this.unique_args  = {}; 
  this.category     = [];
  this.section      = {};
  this.filters      = {};
}

Header.prototype.addTo = function(to) {
  if (_.isArray(to)) {
    this.to = this.to.concat(to);
  } else {
    this.to.push(to);
  }
};

Header.prototype.setTos = function(tos) {
  this.to = tos;
};

Header.prototype.addSubstitution = function(key, val) {
  if (_.isArray(val)) {
    this.sub[key] = val;
  } else {
    this.sub[key] = [val];
  }
};

Header.prototype.setSubstitutions = function(substitutions) {
  this.sub = substitutions;
};

Header.prototype.addUniqueArg = function(object_literal) {
  if (_.isObject(object_literal)) {
    _.extend(this.unique_args, object_literal);
  }
};

Header.prototype.setUniqueArgs = function(object_literal) {
  if (_.isObject(object_literal)) {
    this.unique_args = object_literal;
  }
};

Header.prototype.addCategory = function(val) {
  if (_.isArray(val)) {
    this.category.concat(val);
  } else {
    this.category.push(val);
  }
};

Header.prototype.setCategories = function(val) {
  if (_.isArray(val)) {
    this.category = val;
  } else {
    this.category = [val];
  }
};

Header.prototype.addSection = function(object_literal){
  if (_.isObject(object_literal)) {
    _.extend(this.section, object_literal);
  }
};

Header.prototype.setSections = function(object_literal){
  if (_.isObject(object_literal)) {
    this.section = object_literal;
  }
};

Header.prototype.addFilter = function(filter, setting, val) {
  if (!this.filters[filter]) {
    this.filters[filter] = {};
  }

  if (!this.filters[filter]['settings']) {
    this.filters[filter]['settings'] = {};
  }

  this.filters[filter]['settings'][setting] = val;
};


Header.prototype.setFilters = function(filters) {
  this.filters = filters;
};

Header.prototype.toJson = function() {
  var data = _.clone(this);
  _.each(data, function(v, k, list) {
    if (_.isEmpty(v)) {
      delete list[k];
    }
  });

  return data;
};

Header.prototype.jsonString = function() {
  var json = JSON.stringify(this.toJson());

  return escapeUnicode(json);
};

function escapeUnicode(str) {
  return str.replace(/[^ -~]|\\/g, function(m0) {
    var code = m0.charCodeAt(0);
    return '\\u' + ((code < 0x10)? '000' : 
                    (code < 0x100)? '00' :
                    (code < 0x1000)? '0' : '') + code.toString(16);
  });
}

function smtpapi() {
  var smtpapi = {
    version:          package_json.version,
    environment:      process.env.NODE_ENV || "development",
    Header:           Header 
  }

  return smtpapi;
}

module.exports = smtpapi();
