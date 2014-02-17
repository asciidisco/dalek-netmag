'use strict';

module.exports = {

	'Can select a doctor': function (test) {
		test.open('http://localhost:5001')
			.assert.val('#select_elm', 10, 'David kicks Daleks')
			.click('#select_elm option:last-child')
			.assert.val('#select_elm', 11, 'Matt we miss you')
			.done();
	}

}