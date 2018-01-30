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
			calc()
		);
	},
	componentDidMount() {
		console.log('animacje?');
	},
	getDefaultProps() {
		console.log('ustawienie domyślnych wartości');
	},
	componentWillReceiveProps() {
		console.log('aktualizacja stanu');
	},
	shouldComponentUpdate() {
        console.log('np. porównanie jakiś danych');
		return true;
	},
	componentWillUpdate() {
		console.log('np. pobranie jakichś danych z innego źródła');
	},
	componentDidUpdate() {
		console.log('animacje?');
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
var element2 = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(element2, document.getElementById('app2'));
