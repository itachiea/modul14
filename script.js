function calc() {
	console.log(1+1);
}

var Counter = React.createClass({

	getInitialState: function() {
		return {
			counter: 0
		};
	},
	componentWillMount() {
		return (
			calc(),
			console.log(this.props.mleko)
		);
	},
	getDefaultProps() {
		mleko: 'jajko'
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function() {
		return React.createElement('div', {className: 'div1'},
			React.createElement('span', {}, 'Licznik ' + this.state.counter),
			React.createElement('button', {onMouseEnter: this.increment}, 'Zwiększanie'),
			React.createElement('button', {onMouseLeave: this.decrement}, 'Zmniejszanie')
		);
	}
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));

var Counter2 = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	componentWillUnmount: function() {
		console.log('mleko');
	},

	render: function() {
		return React.createElement('div', {className: 'div2'},
			React.createElement('span', {}, 'Licznik ' + this.state.counter),
			React.createElement('button', {onClick: this.increment}, 'Zwiększanie'),
			React.createElement('button', {onClick: this.decrement}, 'Zmniejszanie')
		);
	}
});


var element2 = React.createElement(Counter2);

ReactDOM.render(element2, document.getElementById('app2'));