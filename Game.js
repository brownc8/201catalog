class Game {
	name;
	esrbRating;
	publisher;
	genre;
	releaseDate;
	description;
	reviews = []; // JS array (similar to Java ArrayList)
	price;
	#players = []; // JS array (similar to Java ArrayList)

	constructor(name, rating, publisher, genre, releaseDate, description, price) {
		this.name = name;
		this.esrbRating = rating;
		this.genre = genre;
		this.releaseDate = releaseDate;
		this.description = description;
		this.price  = price;
	}

	addPlayers(name) {
		#players.push(name);
}

	// Adds review object to array of reviews
	addReviews(review) {
		reviews.push(review);
}

	






}