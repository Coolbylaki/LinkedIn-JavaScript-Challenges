class Book {
    constructor(title, author, isbn, numCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;
    };

    get getAvailability() {
        if (this.numCopies === 0) {
            return "Out of stock";
        } else if (this.numCopies < 10) {
            return "Low stock";
        } else {
            return "In stock";
        };
    };

    sell(numSold = 1) {
        this.numCopies -= numSold;
    };

    restock(numCopies = 5) {
        this.numCopies += numCopies;
    };
}