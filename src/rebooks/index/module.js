var React = require('react');

mymodule = React.createClass({
	render: function(foo) {
		var blackColor = {color: "red"};
		return <li style={blackColor}> {this.props} </li>;
	}
});
module.exports = mymodule