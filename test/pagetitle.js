'use strict';

module.exports = {

	'Pagetitle is as expected': function (test) {
		test.open('http://localhost:5001')
			.assert.title('I am a page title', 'Title is as expected')
			.done();
	}

};