jquery.gh-readme [![Build Status](https://travis-ci.org/zmckinnon/jquery-gh-readme.png)](https://travis-ci.org/zmckinnon/jquery-gh-readme)
================

A jQuery plugin for rendering a readme.md in Github file as html.

## Installation ##

	bower install jquery-gh-readme

## Usage ##

	<div id="readme"></div>
	<script src="/bower_components/jquery/dist/jquery.js"></script>
	<script src="/bower_components/jquery-gh-readme/dist/jquery.gh-readme.min.js"></script>
	<script>
		$(function () {
			var options = {
				owner: 'zmckinnon',
				repo: 'jquery-gh-readme'
			};
			$('#readme').readme(options);
		});
	</script>
