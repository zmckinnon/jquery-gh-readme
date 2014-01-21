describe('jQuery.gh-readme', function () {
	
	beforeEach(function (done) {
		$('<div id="readme"></div>').appendTo('body');
		var options = {
			owner: 'zmckinnon',
			repo: 'jquery-gh-readme'
		};
		jQuery.get = function (url, callback) { callback({ content: 'IyMgVGVzdCAxMjMgIyM=' }); };
		$('#readme').readme(options).then(done);
	});

	afterEach(function () {
		$('#readme').remove();
	});

	it('should ', function () {
		var readmeContents = $('#readme').html();
		expect(readmeContents).to.equal('<h2 id="test-123">Test 123</h2>\n');
	});

});
