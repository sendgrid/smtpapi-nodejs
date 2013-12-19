# smtpapi-nodejs

Generate SendGrid X-SMTPAPI headers.

```javascript
var smtpapi  = require('smtpapi');
var header    = smtpapi.Header(); 
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
    "smtpapi": "0.0.1"
  }
}
```

Install smtpapi-nodejs and its dependencies:

```bash
npm install
```

## Usage

### Initializing

```javascript
var smtpapi  = require('smtpapi');
var header    = smtpapi.Header();
```

### addSubVal

```javascript
var header     = new Email();
header.addSubVal('keep', 'secret'); // sub = {keep: ['secret']}
header.addSubVal('other', ['one', 'two']);   // sub = {keep: ['secret'], other: ['one', 'two']}
```

### setSection 

```javascript
var header     = new smtpapi.Header();
header.setSection({'-charge-': 'This ship is useless.'}); // section = {'-charge-': 'This ship is useless.'}
```

### addSection

```javascript
var header     = new smtpapi.Header();
header.setSection({'-charge-': 'This ship is useless.'}); // section = {'-charge-': 'This ship is useless.'}
header.addSection({'-bomber-': 'Only for sad vikings.'}); // section = {'-charge-': 'This ship is useless.',
```

### setUniqueArgs

```javascript
var header     = new smtpapi.Header();
header.setUniqueArgs({cow: 'chicken'}); // unique_args = {cow: 'chicken'}
header.setUniqueArgs({dad: 'proud'});   // unique_args = {dad: 'proud'}
```

### addUniqueArgs

```javascript
var header     = new smtpapi.Header();
header.setUniqueArgs({cow: 'chicken'}); // unique_args = {cow: 'chicken'}
header.addUniqueArgs({cat: 'dog'});     // unique_args = {cow: 'chicken', cat: 'dog'}
```

### setFilterSetting

You can set a filter using an object literal.

```javascript
var header     = new smtpapi.Header();
header.setFilterSetting({
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
var header     = new smtpapi.Header();
header.setCategory('tactics');        // category = ['tactics']
header.setCategory('snowball-fight'); // category = ['snowball-fight']
```

### addCategory

```javascript
var header     = new smtpapi.Header();
header.setCategory('tactics');        // category = ['tactics']
header.addCategory('advanced');       // category = ['tactics', 'advanced']
```

### addFilterSetting

Alternatively, you can add filter settings one at a time.

```javascript
var header     = new smtpapi.Header();
header.addFilterSetting('footer', 'enable', 1);
header.addFilterSetting('footer', 'text/html', '<strong>boo</strong>');
```


