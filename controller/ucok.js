var _ = require('common/util');
var Panels = require('ui/panels').Panels;

_.extend(exports, {
    ':load': function() {
        var panel =  new Panels();
        panel.add('Main Title', app.newView('main', panel));
        panel.add('Main', app.newView('main', panel));
        panel.add('Main Kelereng', app.newView('main', panel));
        this.add(panel);
	},
    ':keypress': function(key){
        this.get(0).emit('keypress', key);
    }
});
