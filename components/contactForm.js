var ContactForm = React.createClass({
	propTypes: {
		contact: React.PropTypes.func.isRequired
	},
	
	render: function() {
		return (
			<form className="contactForm">
				<input type="text" placeholder="imie" value={this.props.contact.value}>
				</input>
				<input type="text" placeholder="nazwisko" value={this.props.contact.value}>
				</input>
				<input type="email" placeholder="Email" value={this.props.contact.email}>
				</input>
				<button type="submit">Dodaj kontakt</button>
	  </form>
		)
	}
});