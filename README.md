# Instagram Formatter

> Format instagram text to proper html link tag on username, hashtag, and URL
This is a fork of [tweet-formatter](https://github.com/pveyes/tweet-formatter) from [pveyes](https://github.com/pveyes/)

## Install

#### [NPM](https://npmjs.org/package/instagram-formatter)

    npm install --save instagram-formatter

#### [Bower](http://bower.io)

	bower install --save instagram-formatter

## Example

#### Node.JS

```js
var instagramFormatter = require('instagram-formatter');
var instagram = 'some instagram text with @username and #hashtag or http://url.com';

var formattedInstagram = instagramFormatter(instagram);
console.log(formattedInstagram);
// outputs:
// some instagram text with <a href="http://instagram.com/username">@username</a>
// and <a href="https://twitter.com/search?q=%23hashtag&src=hash">#hashtag</a>
// or <a href="http://url.com">http://url.com</a>
```

## License

MIT
