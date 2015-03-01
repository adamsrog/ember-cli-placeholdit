import Ember from 'ember';

export default Ember.Component.extend({
	height: 100,
	width: 100,
	text: undefined,

	backgroundColor: 'aaa',
	textColor: '666',

	src: Ember.computed('height', 'width', 'backgroundColor', 'textColor', function() {
		
		// build url for placeholder image
		var base = 'http://placehold.it/';
		var src = base + this.get('width') + 'x' + this.get('height') + '/';
		src += this.get('backgroundColor') + '/' + this.get('textColor');
		
		// check for custom placeholder text
		if (this.get('text')) {
			src += '&text=' + this.get('text');
		}
		return src;
	})
});
