'use strict';

/**
 * Dependencies
 */
const fs = require("fs");
const assert = require('assert');

/**
 * Tests
 */
describe('LICENSE', () => {
  it('should contain the current year as the end year of the license', () => {
    const license = fs.readFileSync(`${process.cwd()}/LICENSE.md`, 'utf8');
    const currentYear= (new Date()).getFullYear();
    return assert(license.indexOf(`${currentYear}`) !== -1);
  });
});
