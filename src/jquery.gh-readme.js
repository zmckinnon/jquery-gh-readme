(function ($) {

	function convertMarkdown(markdownToConvert) {
		return marked(markdownToConvert);
	}

	$.fn.readme = function (options) {
		var deferred = new $.Deferred();
		var self = this;
		var owner = options.owner;
		var repo = options.repo;
		var branch = options.branch||'master';
		var file = options.file||'/README.md';
		$.get('https://raw.githubusercontent.com/' + owner + '/' + repo + '/' + branch + '' + file + '', function (response) {
			var markdownToConvert = response.content;
			var html = convertMarkdown(markdownToConvert);
			$(self).html(html);
			deferred.resolve();
		});
		return deferred.promise();
	};

})(jQuery);
