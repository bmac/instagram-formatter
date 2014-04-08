'use strict';
var assert = require('assert');
var tweetFormatter = require('./tweet-formatter');

it('should return properly formatted username', function () {
	assert.equal('<a href="http://instagram.com/pveyes">@pveyes</a>', tweetFormatter('@pveyes'));
	assert.equal('a@pveyes', tweetFormatter('a@pveyes'));
});

it('should return properly formatted hashtag', function () {
	assert.equal('<a href="https://twitter.com/search?q=%23hashtag&src=hash">#hashtag</a>', tweetFormatter('#hashtag'));
	assert.equal('invalid#hashtag', tweetFormatter('invalid#hashtag'));
});

it('should return properly formatted URL', function () {
	var URL1 = 'https://google.com';
	assert.equal('<a href="https://google.com">https://google.com</a>', tweetFormatter(URL1));

	var URL2 = 'ftp://google.com/~';
	assert.equal('<a href="ftp://google.com/~">ftp://google.com/~</a>', tweetFormatter(URL2));

	var invalidURL1 = 'ftpx:///~';
	assert.equal('ftpx:///~', tweetFormatter(invalidURL1));

	var invalidURL2 = 'https:';
	assert.equal('https:', tweetFormatter(invalidURL2));
});

it('should return properly formatted tweet', function () {
	var tweet1 = 'test #hashtag by @pveyes with url https://google.com'
	var result1 = 'test <a href="https://twitter.com/search?q=%23hashtag&src=hash">#hashtag</a> by <a href="http://instagram.com/pveyes">@pveyes</a> with url <a href="https://google.com">https://google.com</a>';
	assert.equal(result1, tweetFormatter(tweet1));
});
