import Ember from 'ember';

export default Ember.Component.extend({
	height: 100,
	width: 100,
	text: undefined,

	src: Ember.computed('height', 'width', function() {
		var base = 'http://placehold.it/';
		var src = base + this.get('width') + '/' + this.get('height');
		
		// check for custom placeholder text
		if (this.get('text')) {
			src += '&text=' + this.get('text');
		}
		return src;
	})
});
