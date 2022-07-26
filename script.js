let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//this was from the initial assignment but probably not needed?
Book.prototype.info = function() {
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
}

//collect info for a new book and add it to the library
function addBookToLibrary() {
    let newBook = Object.create(Book);
    newBook.title = prompt("Title: ");
    newBook.author = prompt("Author: ");
    newBook.pages = prompt("Pages: ");
    newBook.read = prompt("Read? ");
    myLibrary.push(newBook);
}


//manually inserted some books to figure out display
myLibrary.push(new Book('The Hobbit', 'J. R. R. Tolkien', 295, 'not read yet'));
myLibrary.push(new Book('Narwhal and Jelly', 'Ben Clanton', 40, 'read'));
myLibrary.push(new Book('Elephant and Piggie', 'Mo Willems', 45, 'read'));

console.table(myLibrary);
