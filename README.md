![SendGrid Logo](twilio_sendgrid_logo.png)

[![Test and Deploy](https://github.com/sendgrid/smtpapi-nodejs/actions/workflows/test-and-deploy.yml/badge.svg)](https://github.com/sendgrid/smtpapi-nodejs/actions/workflows/test-and-deploy.yml)
[![npm](https://img.shields.io/npm/v/smtpapi.svg)](https://www.npmjs.com/package/smtpapi)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/sendgrid.svg?style=social&label=Follow)](https://twitter.com/sendgrid)
[![GitHub contributors](https://img.shields.io/github/contributors/sendgrid/smtpapi-nodejs.svg)](https://github.com/sendgrid/smtpapi-nodejs/graphs/contributors)

**This node module allows you to quickly and more easily generate SendGrid X-SMTPAPI headers.**

# Announcements
**The default branch name for this repository has been changed to `main` as of 07/27/2020.**

All updates to this module are documented in our [CHANGELOG](CHANGELOG.md).

# Table of Contents
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Library Usage Documentation](USAGE.md)
- [How to Contribute](#contribute)
- [About](#about)
- [License](#license)

<a name="installation"></a>
# Installation

## Prerequisites

- Node.js version 4, 5, 6, 7, 8, 10, 12, or 14
- The SendGrid service, starting at the [free level](https://sendgrid.com/free?source=smtpapi-nodejs)

## Environment Variables

Update your environment with your SendGrid credentials. (if you will be sending via nodemailer or other SMTP transport)

```bash
echo "export SENDGRID_USERNAME='YOUR_USERNAME'" > sendgrid.env
echo "export SENDGRID_PASSWORD='YOUR_PASSWORD'" >> sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env
```

The following recommended installation requires [npm](https://npmjs.org/). If you are unfamiliar with npm, see the [npm docs](https://npmjs.org/doc/). Npm comes installed with Node.js since node version 0.8.x, therefore, you likely already have it.

Install smtpapi-nodejs and its dependencies:

```bash
npm install smtpapi
```

## Dependencies

- Please see [package.json](package.json)

<a name="quick-start"></a>
# Quick Start

```javascript
var smtpapi = require("smtpapi");
var header = new smtpapi();
header.addTo("test@example.com");
header.setUniqueArgs({ cow: "chicken" });
console.log(header.jsonString());
```

<a name="usage"></a>
# Usage

<a name="contribute"></a>
# How to Contribute

We encourage contribution to our projects, please see our [CONTRIBUTING](CONTRIBUTING.md) guide for details.

Quick links:

- [Feature Request](CONTRIBUTING.md#feature-request)
- [Bug Reports](CONTRIBUTING.md#submit-a-bug-report)
- [Improvements to the Codebase](CONTRIBUTING.md#improvements-to-the-codebase)
- [Review Pull Requests](CONTRIBUTING.md#code-reviews)

<a name="about"></a>
# About

smtpapi-nodejs is maintained and funded by Twilio SendGrid, Inc. The names and logos for smtpapi-nodejs are trademarks of Twilio SendGrid, Inc.

If you need help installing or using the library, please check the [Twilio SendGrid Support Help Center](https://support.sendgrid.com).

If you've instead found a bug in the library or would like new features added, go ahead and open issues or pull requests against this repo!

<a name="license"></a>
# License
[The MIT License (MIT)](LICENSE)
