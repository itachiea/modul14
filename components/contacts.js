var Contacts = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},

	render() {
    	var contacts = this.props.items.map(function() {
        	return <Contact item={contact} key={contact.id}/>
        });
      
    	return(
        	<div className="contactsList">
            	contacts
            </div>
        )
    }
});