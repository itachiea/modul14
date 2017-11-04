
/*var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {},
			React.createElement('li', {},
				React.createElement('h2', {}, 'Harry Potter'),
				React.createElement('p', {}, 'Film o czarodzieju')
				),
				React.createElement('li', {}, 
					React.createElement('h2', {}, 'Król lew'),
					React.createElement('p', {}, 'Film o lwie')
					)
			)
		);*/




var movies = [
{
	id: 1,
	title: 'Harry Potter',
	desc: 'film o czarodzieju',
	link: 'https://static.pexels.com/photos/226243/pexels-photo-226243.jpeg'
},
{
	id: 2,
	title: 'Król Lew',
	desc: 'Film o lwie',
	link: 'https://static.pexels.com/photos/226292/pexels-photo-226292.jpeg'
},
{
	id: 3,
	title: 'tak',
	desc: 'opis tak',
	link: 'https://static.pexels.com/photos/226293/pexels-photo-226293.jpeg'
},
{
	id: 4,
	title: 'nie',
	desc: 'opis nie',
	link: 'https://static.pexels.com/photos/226460/pexels-photo-226460.jpeg'
},
{
	id: 5,
	title: 'może',
	desc: 'opis może',
	link: 'https://static.pexels.com/photos/226632/pexels-photo-226632.jpeg'
}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.link}, )
		);
});


var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));