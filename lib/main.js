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

Header.prototype.addSubVal = function(key, val) {
  if (_.isArray(val)) {
    this.sub[key] = val;
  } else {
    this.sub[key] = [val];
  }
};

Header.prototype.setUniqueArgs = function(object_literal) {
  if (_.isObject(object_literal)) {
    this.unique_args = object_literal;
  }
};

Header.prototype.addUniqueArgs = function(object_literal) {
  if (_.isObject(object_literal)) {
    _.extend(this.unique_args, object_literal);
  }
};

Header.prototype.setCategory = function(val) {
  if (_.isArray(val)) {
    this.category = val;
  } else {
    this.category = [val];
  }
};

Header.prototype.addCategory = function(val) {
  if (_.isArray(val)) {
    this.category.concat(val);
  } else {
    this.category.push(val);
  }
};

Header.prototype.setSection = function(object_literal){
  if (_.isObject(object_literal)) {
    this.section = object_literal;
  }
};

Header.prototype.addSection = function(object_literal){
  if (_.isObject(object_literal)) {
    _.extend(this.section, object_literal);
  }
};

Header.prototype.setFilterSetting = function(filters) {
  this.filters = filters;
};

Header.prototype.addFilterSetting = function(filter, setting, val) {
  if (!this.filters[filter]) {
    this.filters[filter] = {};
  }

  if (!this.filters[filter]['settings']) {
    this.filters[filter]['settings'] = {};
  }

  this.filters[filter]['settings'][setting] = val;
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

Header.prototype.toJsonString = function() {
  var json = JSON.stringify(this.toJson());
  return json.replace(/(["\]}])([,:])(["\[{])/, '$1$2 $3');
};


function xsmtpapi() {
  var xsmtpapi = {
    version:          package_json.version,
    environment:      process.env.NODE_ENV || "development",
    Header:          Header 
  }

  return xsmtpapi;
}

module.exports = xsmtpapi();
