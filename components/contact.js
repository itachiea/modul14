var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('div', {className: 'contactItem col-4'},
				React.createElement('img', {
					className: 'contactImage',
					src: 'http://via.placeholder.com/50x50'
				}),
				React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
				React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
				React.createElement('a', {className: 'contactEmail', href: 'mailto: ' + this.props.item.email},
					this.props.item.email
				)
			)
		)
	},
});