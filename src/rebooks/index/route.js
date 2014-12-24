var Route = require('src/common/route');
var Backbone = require('backbone');
var React = require('react');

module.exports = Route.extend({
    initialize: function(options) { 
        this.collection = options.collection 
    },

    fetch: function() {
        if (this.collection.isNew()) {
            return this.collection.fetch();
        }
    },

    onEnter: function() {
        var collection = this.collection, 
            MyComponent = React.createClass({
                mixins: [Backbone.React.Component.mixin], 
                render: function() {
                    var items = {},
                        greenColor = {color: 'green'},
                        blueColor = {color: 'blue'}
                        greyColor = {color: 'grey'},
                        purpleColor = {color: 'purple'},
                        pinkColor = {color: 'pink'},
                        redColor = {color: 'red'},
                        orangeColor = {color: 'orange'};
    
                    this.props.collection.forEach(function(result) {
                        switch(result.id) {
                            case 1:
                                return items['result-' + result.id] = <li style={greenColor}>{result.title}</li>;
                                break;
                            case 2:
                                return items['result-' + result.id] = <li style={blueColor}>{result.title}</li>;
                                break;
                            case 3:
                                return items['result-' + result.id] = <li style={greyColor}>{result.title}</li>;
                                break;
                            case 4:
                                return items['result-' + result.id] = <li style={purpleColor}>{result.title}</li>;
                                break;
                            case 5:
                                return items['result-' + result.id] = <li style={orangeColor}>{result.title}</li>;
                                break;
                            case 6: 
                                return items['result-' + result.id] = <li style={pinkColor}>{result.title}</li>;
                                break;
                            case 7:
                                return items['result-' + result.id] = <li style={redColor}>{result.title}</li>;
                                break;
                        };
                    });
                    
                    return  (
                        <ol>
                            {items}
                        </ol>
                    );
                }
            });

        React.render(<MyComponent collection={collection} />, document.body);
    }
});
