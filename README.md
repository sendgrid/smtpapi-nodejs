![SendGrid Logo](https://uiux.s3.amazonaws.com/2016-logos/email-logo%402x.png)

[![BuildStatus](https://travis-ci.org/sendgrid/smtpapi-nodejs.png?branch=master)](https://travis-ci.org/sendgrid/smtpapi-nodejs)
[![npm](https://img.shields.io/npm/v/smtpapi.svg)](https://www.npmjs.com/package/smtpapi)
[![Email Notifications Badge](https://dx.sendgrid.com/badge/nodejs)](https://dx.sendgrid.com/newsletter/nodejs)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)
[![Twitter Follow](https://img.shields.io/twitter/follow/sendgrid.svg?style=social&label=Follow)](https://twitter.com/sendgrid)
[![GitHub contributors](https://img.shields.io/github/contributors/sendgrid/smtpapi-nodejs.svg)](https://github.com/sendgrid/smtpapi-nodejs/graphs/contributors)

**This node module allows you to quickly and more easily generate SendGrid X-SMTPAPI headers.**

# Announcements
**NEW:** If you're a software engineer who is passionate about #DeveloperExperience and/or #OpenSource, [this is an incredible opportunity to join our #DX team](https://sendgrid.com/careers/role/1421152/?gh_jid=1421152) as a Developer Experience Engineer and work with [@thinkingserious](https://github.com/thinkingserious) and [@aroach](https://github.com/aroach)! Tell your friends :)

All updates to this module are documented in our [CHANGELOG](https://github.com/sendgrid/smtpapi-nodejs/blob/master/CHANGELOG.md).

# Table of Contents
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Library Usage Documentation](USAGE.md)
- [Roadmap](#roadmap)
- [How to Contribute](#contribute)
- [About](#about)
- [License](#license)

<a name="installation"></a>
# Installation

## Prerequisites

- Node.js version 0.10, 0.12 or 4
- The SendGrid service, starting at the [free level](https://sendgrid.com/free?source=smtpapi-nodejs)

## Environment Variables

Update your environment with your SendGrid credentials. (if you will be sending via nodemailer or other SMTP transport)

```bash
echo "export SENDGRID_USERNAME='YOUR_USERNAME'" > sendgrid.env
echo "export SENDGRID_PASSWORD='YOUR_PASSWORD'" >> sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env
```

The following recommended installation requires [npm](https://npmjs.org/). If you are unfamiliar with npm, see the [npm docs](https://npmjs.org/doc/). Npm comes installed with Node.js since node version 0.8.x therefore you likely already have it.

Install smtpapi-nodejs and its dependencies:

```bash
npm install smtpapi
```

## Dependencies

- Please see [package.json](https://github.com/sendgrid/smtpapi-nodejs/blob/master/package.json)

<a name="quick-start"></a>
# Quick Start

```javascript
var smtpapi   = require('smtpapi');
var header    = new smtpapi();
header.addTo('test@example.com');
header.setUniqueArgs({cow: 'chicken'});
console.log(header.jsonString());
```

<a name="usage"></a>
# Usage

<a name="roadmap"></a>
# Roadmap

If you are interested in the future direction of this project, please take a look at our [milestones](https://github.com/sendgrid/smtpapi-nodejs/milestones). We would love to hear your feedback.

<a name="contribute"></a>
# How to Contribute

We encourage contribution to our projects, please see our [CONTRIBUTING](https://github.com/sendgrid/smtpapi-nodejs/blob/master/CONTRIBUTING.md) guide for details.

Quick links:

- [Feature Request](https://github.com/sendgrid/smtpapi-nodejs/blob/master/CONTRIBUTING.md#feature-request)
- [Bug Reports](https://github.com/sendgrid/smtpapi-nodejs/blob/master/CONTRIBUTING.md#submit-a-bug-report)
- [Sign the CLA to Create a Pull Request](https://github.com/sendgrid/smtpapi-nodejs/blob/master/CONTRIBUTING.md#cla)
- [Improvements to the Codebase](https://github.com/sendgrid/smtpapi-nodejs/blob/master/CONTRIBUTING.md#improvements-to-the-codebase)
- [Review Pull Requests](https://github.com/sendgrid/smtpapi-nodejs/blob/master/CONTRIBUTING.md#code-reviews)

<a name="about"></a>
# About

smtpapi-nodejs is guided and supported by the SendGrid [Developer Experience Team](mailto:dx@sendgrid.com).

smtpapi-nodejs is maintained and funded by SendGrid, Inc. The names and logos for smtpapi-nodejs are trademarks of SendGrid, Inc.

<a name="license"></a>
# License
[The MIT License (MIT)](LICENSE.md)
