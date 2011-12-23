var _ = require('common/util');

var storage = app.storage('apaajaboleh');
_.extend(exports, {
    initialize: function(type) {
        this.topPanels = type[0];
    },
	':load': function() {
		console.log('View was loaded');
        var self = this;
        
        var judul = storage.get('pertama');
        var hasilText = judul.hasilText;
        
        console.log(hasilText);
        
        self.get('title').label(hasilText);
        
        self.get('logo').src(app.resourceURL('logo.png'));
        
        self.selection = self.keySelectionWithItems([
            self.get('title'),
            self.get('nama'),
            self.get('logo'),
            self.get('button')
        ], {});
        
        self.get('nama').on('activate', function() {
            self.get('nama').emit('keypress', 'fire');
            
            storage.remove('kedua');
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
            storage.set('pertama', {hasilText: self.get('nama').value(), noHP: '080989999'});
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
        this.recollorTopPanel();
	},

	':inactive': function() {
		console.log('View is inactive');
	},
    
    recollorTopPanel: function () {
        try {
			this.topPanels.get(0).style({
				'background-color': '#00a0d1'
			});
			this.topPanels.nav.style({
				'background-color': '#00a0d1'	
			});
			this.topPanels.get(0).get(0).style({
				'background-color': 'white'
			});
			this.topPanels.nav.get(0).style({
				'color': 'white',
				'background-color': '#00a0d1',
				'font-weight': 'normal'
			});
			this.topPanels.nav.get(1).style({
				'color': 'white',
				'background-color': '#00a0d1',
				'font-weight': 'normal'
			});
			this.topPanels.nav.get(2).style({
				'color': 'white',
				'background-color': '#00a0d1',
				'font-weight': 'normal'
			});
		} catch (e) { }
	}
});
