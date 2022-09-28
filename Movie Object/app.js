function Movie(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

harryPotter = new Movie("Harry Potter", "JK Rowling", "Fantasy", "1998", "9.7")

Movie.prototype.getOverview = function () {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}/10.0!`
}