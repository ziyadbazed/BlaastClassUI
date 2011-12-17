var _ = require('common/util');

_.extend(exports, {
	':load': function() {
		console.log('View was loaded');
        var self = this;
        self.get('logo').src(app.resourceURL('logo.png'));
        
        self.selection = self.keySelectionWithItems([
            self.get('title'),
            self.get('nama'),
            self.get('logo'),
            self.get('button')
        ], {});
        
        self.get('nama').on('activate', function() {
            self.get('nama').emit('keypress', 'fire');
        });
        
        self.get('nama').on('focus', function() {
            self.get('nama').style({
                'background-color': 'yellow'
            });
        });
        
        self.get('nama').on('blur', function() {
            self.get('nama').style({
                'background-color': 'blue'
            });
        });
        
        self.get('button').on('activate', function() {
            console.log(self.get('nama').value());
        });
        
	},

	':resized': function(width, height) {
		console.log('View was resized to ' + width + 'x' + height);
	},

	':keydown': function(key) {
		console.log('Key down: '+ key);
	},

	':keyup': function(key) {
		console.log('Key up: ' + key);
	},

	':keypress': function(key) {
		console.log('Key press: ' + key);
	},

	':active': function() {
		console.log('View is active');
	},

	':inactive': function() {
		console.log('View is inactive');
	}
});
