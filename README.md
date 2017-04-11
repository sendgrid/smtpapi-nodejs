[![BuildStatus](https://travis-ci.org/sendgrid/smtpapi-nodejs.png?branch=master)](https://travis-ci.org/sendgrid/smtpapi-nodejs)

**This node module allows you to quickly and more easily generate SendGrid X-SMTPAPI headers.**

# Announcements

All updates to this module is documented in our [CHANGELOG](https://github.com/sendgrid/smtpapi-nodejs/blob/master/CHANGELOG.md).

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

Add the following to your `package.json` file:

```json
{
  ...
  "dependencies": {
    ...
    "smtpapi": "1.3.1"
  }
}
```

Install smtpapi-nodejs and its dependencies:

```bash
npm install
```

## Dependencies

- Please see [package.json](https://github.com/sendgrid/smtpapi-nodejs/blob/master/package.json)

# Quick Start

```javascript
var smtpapi   = require('smtpapi');
var header    = new smtpapi();
header.addTo('test@example.com');
header.setUniqueArgs({cow: 'chicken'});
console.log(header.jsonString());
```

# Usage

- [SendGrid Docs](https://sendgrid.com/docs/API_Reference/SMTP_API/index.html)
- [Example Code](https://github.com/sendgrid/smtpapi-nodejs/blob/master/examples)

## Roadmap

If you are intersted in the future direction of this project, please take a look at our [milestones](https://github.com/sendgrid/smtpapi-nodejs/milestones). We would love to hear your feedback.

## How to Contribute

We encourage contribution to our projects, please see our [CONTRIBUTING](https://github.com/sendgrid/smtpapi-nodejs/blob/master/CONTRIBUTING.md) guide for details.

Quick links:

- [Feature Request](https://github.com/sendgrid/smtpapi-nodejs/blob/master/CONTRIBUTING.md#feature_request)
- [Bug Reports](https://github.com/sendgrid/smtpapi-nodejs/blob/master/CONTRIBUTING.md#submit_a_bug_report)
- [Sign the CLA to Create a Pull Request](https://github.com/sendgrid/smtpapi-nodejs/blob/master/CONTRIBUTING.md#cla)
- [Improvements to the Codebase](https://github.com/sendgrid/smtpapi-nodejs/blob/master/CONTRIBUTING.md#improvements_to_the_codebase)

# About

smtpapi-nodejs is guided and supported by the SendGrid [Developer Experience Team](mailto:dx@sendgrid.com).

smtpapi-nodejs is maintained and funded by SendGrid, Inc. The names and logos for smtpapi-nodejs are trademarks of SendGrid, Inc.

![SendGrid Logo]
(https://uiux.s3.amazonaws.com/2016-logos/email-logo%402x.png)
