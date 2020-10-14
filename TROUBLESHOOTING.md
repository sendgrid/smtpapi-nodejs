If you have a non-library SendGrid issue, please contact our [support team](https://support.sendgrid.com).

If you can't find a solution below, please open an [issue](https://github.com/sendgrid/sendgrid-nodejs/issues).


## Table of Contents

- [Table of Contents](#table-of-contents)
- [Versions](#versions)
- [Using the Package Manager](#using-the-package-manager)
- [Outputting the SMTPAPI Header](#outputting-the-SMTPapi-header)

<a name="versions"></a>
## Versions

We follow the MAJOR.MINOR.PATCH versioning scheme as described by [SemVer.org](http://semver.org). Therefore, we recommend that you always pin (or vendor) the particular version you are working with to your code and never auto-update to the latest version. Especially when there is a MAJOR point release since that is guaranteed to be a breaking change. Changes are documented in the [CHANGELOG](CHANGELOG.md) section.

<a name="package-manager"></a>
## Using the Package Manager

We upload this library to [npm](https://www.npmjs.com/package/sendgrid) whenever we make a release. This allows you to use [npm](https://www.npmjs.com) for easy installation.

In most cases we recommend you download the latest version of the library, but if you need a different version, please use:

`npm install @sendgrid/[package name]@X.X.X`

Please check [here](https://www.npmjs.com/org/sendgrid) for a list of package names.

If you are using a `package.json` file:

```json
{
  ...
  "dependencies": {
    ...
    "@sendgrid/[package name]": "X.X.X"
  }
}
```

<a name="SMTPapi-header"></a>
## Outputting the SMTPAPI Header

You can output the header by the following:

```javascript
  var header = new smtpapi();
  ...
  console.log(header.jsonString());
```

or use it in your options for the transport (Nodemailer example):

```javascript
  var headers = { 'x-smtpapi': header.jsonString() };
  ...
  var mailOptions = {
    ...
    headers:  headers
  }
```
