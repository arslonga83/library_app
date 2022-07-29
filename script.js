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
    newBook = Object.create(Book);
    newBook.title = prompt("Title: ");
    newBook.author = prompt("Author: ");
    newBook.pages = prompt("Pages: ");
    newBook.read = prompt("Read? ");
    myLibrary.push(newBook);
    populateRow();
}

//specifically adds the newest book to table
function populateRow() {
    let table = document.querySelector('table');
    let newRow = table.insertRow();
    for (i = myLibrary.length - 1, j = 0; j < 4; j++) {
        let newCell = newRow.insertCell();
        let newText = document.createTextNode(Object.values(myLibrary[i])[j]);
        newCell.appendChild(newText);
    }
    newCell = newRow.insertCell();
    let button = document.createElement('button');
    button.dataset.index = i;
    button.classList.add('deleteButton');
    newCell.appendChild(button);
    createDelete();
}

// this function make the table from myLibrary
function makeTable(myLibrary) {   
    let table = document.querySelector('table'); 
for (i = 0; i < myLibrary.length; i++) {
        let newRow = table.insertRow();
        for (j = 0; j < 4; j++) {
            let newCell = newRow.insertCell();
            let newText = document.createTextNode(Object.values(myLibrary[i])[j]);
            newCell.appendChild(newText);
        }
        newCell = newRow.insertCell();
        let button = document.createElement('button');
        button.dataset.index = i;
        button.classList.add('deleteButton');
        newCell.appendChild(button);
    }
    createDelete();
}

//manually inserted some books to figure out display
myLibrary.push(new Book('The Hobbit', 'J. R. R. Tolkien', 295, 'not read yet'));
myLibrary.push(new Book('Narwhal and Jelly', 'Ben Clanton', 40, 'read'));
myLibrary.push(new Book('Elephant and Piggie', 'Mo Willems', 45, 'read'));

makeTable(myLibrary);

const button = document.querySelector('.new-book');
button.addEventListener('click', () => {
    addBookToLibrary();
})

function createDelete() {
    document.querySelectorAll('.deleteButton').forEach(item => {
        item.addEventListener('click', () => {
            index = item.dataset.index;
            for (i = 0; i < myLibrary.length; i++) {
                if (i == index) {
                    myLibrary.splice(i, 1);
                }
            }
        })
    })
}
