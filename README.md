# AngularJS confirm message directive

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](http://opensource.org/licenses/MIT)

## Installation Methods

### npm
```
$ npm install confirm-message-directive
```
### bower
```
$ bower install confirm-message-directive
```

## Add Dependency

```
// Regular angularjs
// First of all add script `../dev-team-confirm-message/dist/dev-team-confirm-message.min.js` to your `index.html` file
// And then add it as module dependency
angular.module('myApp', ['dev-team-confirm-message', ...])

// requirejs
define(['angular', 'dev-team-confirm-message'], function(angular) {...});

// commonjs
var angular = require('angular');
angular.module('app', [require('dev-team-confirm-message'), ....])
```

## How to use
### In HTML:
```
<dt-confirm-message></dt-confirm-message>
<dt-confirm-link text="textOnTheButton"
                 message="messageThatWillBeDisplayed"
                 confirm-action="confirm()"
                 cancel-action="cancel()">
</dt-confirm-link>
```
### confirmAction/cancelAction can be async functions that return promise, or can be regular function with some logic

### Supported attributes
- `text`: Text that will be displayed on the button
- `message`: Message that will be displayed on the shown element
- `confirm-action`: Function that will be invoked on confirm click. Can be async
- `cancel-action`: Function that will be invoked on cancel click. Can be async

## Feedback

Please [leave your feedback](https://github.com/DevTeamHub/confirm-message-directive/issues) if you have noticed any issues or have a feature request.

## License

The repository code is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
