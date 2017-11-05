var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		link: 'https://static.pexels.com/photos/226243/pexels-photo-226243.jpeg',
		desc2: 'coś tam do ćwiczenia'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o lwie',
		link: 'https://static.pexels.com/photos/226292/pexels-photo-226292.jpeg',
		desc2: 'coś tam do ćwiczenia'
	},
	{
		id: 3,
		title: 'tak',
		desc: 'opis tak',
		link: 'https://static.pexels.com/photos/226293/pexels-photo-226293.jpeg',
		desc2: 'coś tam do ćwiczenia'
	},
	{
		id: 4,
		title: 'nie',
		desc: 'opis nie',
		link: 'https://static.pexels.com/photos/226460/pexels-photo-226460.jpeg',
		desc2: 'coś tam do ćwiczenia'
	},
	{
		id: 5,
		title: 'może',
		desc: 'opis może',
		link: 'https://static.pexels.com/photos/226632/pexels-photo-226632.jpeg',
		desc2: 'coś tam do ćwiczenia'
	}
];

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	render() {
		return (
			React.createElement('h2', {}, this.props.title)
		);
	}
});


var MovieDesc2 = React.createClass({
	propTypes: {
		desc2: React.PropTypes.string.isRequired
	},

	render() {
		return (
			React.createElement('h6', {}, this.props.desc2)
		);
	}
})

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired
	},

	render() {
		return (
			React.createElement('p', {}, this.props.desc)
		);
	}
});

var MovieImage = React.createClass({
	propTypes: {
		source: React.PropTypes.string.isRequired
	},

	render() {
		return (
			React.createElement('img', {src: this.props.source})
		);
	}
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},

	render() {
		return (
			React.createElement('li', {},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDescription, {desc: this.props.movie.desc}),
				React.createElement(MovieImage, {source: this.props.movie.link}),
				React.createElement(MovieDesc2, {desc2: this.props.movie.desc2}),
			)
		);
	}
});

var moviesElements = movies.map(function(movie) {
	return React.createElement(Movie, {key: movie.id, movie: movie})	
});


var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, "Lista filmów"),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));