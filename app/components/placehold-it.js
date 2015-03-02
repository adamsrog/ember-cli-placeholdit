import Ember from 'ember';

export default Ember.Component.extend({
	height: 100,
	width: 100,

	backgroundColor: 'aaa',
	textColor: '555',

	format: undefined, // gif, jpg, jpeg, png
	text: undefined,

	src: Ember.computed('height', 'width', 'backgroundColor', 'textColor', 'format', function() {
		
		// build url for placeholder image
		var base = 'http://placehold.it/';
		var src = base + this.get('width') + 'x' + this.get('height') + '/';
		src += this.get('backgroundColor') + '/' + this.get('textColor');

		// check for image format
		if (this.get('format')) {
			src += '.' + this.get('format');
		}
		
		// check for custom placeholder text
		if (this.get('text')) {
			src += '&text=' + this.get('text');
		}
		return src;
	})
});
