# xsmtpapi-nodejs

Generate SendGrid X-SMTPAPI headers.

```javascript
var xsmtpapi  = require('xsmtpapi');
var header    = xsmtpapi.Header(); 
header.addTo('you@youremail.com');
header.setUniqueArgs({cow: 'chicken'});
```

See [this](http://sendgrid.com/docs/API_Reference/SMTP_API/) for more information on the available X-SMTPAPI custom handling instructions.

## Installation

The following recommended installation requires [npm](https://npmjs.org/). If you are unfamiliar with npm, see the [npm docs](https://npmjs.org/doc/). Npm comes installed with Node.js since node version 0.8.x therefore you likely already have it.

Add the following to your `package.json` file:

```json
{
  ...
  "dependencies": {
    ...
    "xsmtpapi": "0.0.1"
  }
}
```

Install xsmtpapi-nodejs and its dependencies:

```bash
npm install
```

## Usage

### Initializing

```javascript
var xsmtpapi  = require('xsmtpapi');
var header    = xsmtpapi.Header();
```

### addSubVal

```javascript
var email     = new Email();
email.addSubVal('keep', 'secret'); // sub = {keep: ['secret']}
email.addSubVal('other', ['one', 'two']);   // sub = {keep: ['secret'], other: ['one', 'two']}
```

### setSection 

```javascript
var email     = new Email();
email.setSection({'-charge-': 'This ship is useless.'}); // section = {'-charge-': 'This ship is useless.'}
```

### addSection

```javascript
var email     = new Email();
email.setSection({'-charge-': 'This ship is useless.'}); // section = {'-charge-': 'This ship is useless.'}
email.addSection({'-bomber-': 'Only for sad vikings.'}); // section = {'-charge-': 'This ship is useless.',
```

### setUniqueArgs

```javascript
var email     = new Email();
email.setUniqueArgs({cow: 'chicken'}); // unique_args = {cow: 'chicken'}
email.setUniqueArgs({dad: 'proud'});   // unique_args = {dad: 'proud'}
```

### addUniqueArgs

```javascript
var email     = new Email();
email.setUniqueArgs({cow: 'chicken'}); // unique_args = {cow: 'chicken'}
email.addUniqueArgs({cat: 'dog'});     // unique_args = {cow: 'chicken', cat: 'dog'}
```

### setFilterSetting

You can set a filter using an object literal.

```javascript
var email     = new Email();
email.setFilterSetting({
  'footer': {
    'setting': {
      'enable': 1,
      'text/plain': 'You can haz footers!'
    }
  }
});
```

### setCategory

```javascript
var email     = new Email();
email.setCategory('tactics');        // category = ['tactics']
email.setCategory('snowball-fight'); // category = ['snowball-fight']
```

### addCategory

```javascript
var email     = new Email();
email.setCategory('tactics');        // category = ['tactics']
email.addCategory('advanced');       // category = ['tactics', 'advanced']
```

### addFilterSetting

Alternatively, you can add filter settings one at a time.

```javascript
var email     = new Email();
email.addFilterSetting('footer', 'enable', 1);
email.addFilterSetting('footer', 'text/html', '<strong>boo</strong>');
```


