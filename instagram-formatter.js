/**
 * Tweet Formatter
 *
 * Format tweet text to proper html link tag on username, hashtag, and URL
 * eg: @pveyes to <a href="http://twitter.com/pveyes">@pveyes</a>
 */

(function () {
	'use strict';

	function tweetFormatter (tweet) {

		function formatURL (tweet) {
			// ref: http://stackoverflow.com/questions/19625183/js-find-urls-in-text-make-links
			return tweet.replace(
				/((http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?)/g,
				'<a href="$1">$1</a>'
			);
		};

		function formatUsername (tweet) {
			// ref: http://stackoverflow.com/questions/5973187/parsing-twitter-name-with-regex-and-javascript
			return tweet.replace(
				/\B@([\w-]+)/gm,
				'<a href="http://instagram.com/$1">@$1</a>'
			);
		};

		function formatHashtag (tweet) {
			return tweet.replace(
				/\B#([\w-]+)/gm,
				'<a href="https://twitter.com/search?q=%23$1&src=hash">#$1</a>'
			);
		};


		// Format URL first to prevent double format
		tweet = formatURL(tweet);
		// then format username and hashtag
		tweet = formatUsername(tweet);
		tweet = formatHashtag(tweet);

		return tweet;
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = tweetFormatter;
	} else {
		window.tweetFormatter = tweetFormatter;
	}

})();
