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
    populateRow(newBook);
}

//this needs work....goal is to add the new book to our table...newBook[0] did get me the title...
function populateRow(newBook) {
    let table = document.querySelector('table');
    let newRow = table.insertRow();
            let newCell = newRow.insertCell();
            let newText = document.createTextNode(newBook.title);
            newCell.appendChild(newText)
            newCell = newRow.insertCell();
            newText = document.createTextNode(newBook.author);
            newCell.appendChild(newText);
            newCell = newRow.insertCell();
            newText = document.createTextNode(newBook.pages);
            newCell.appendChild(newText);
            newCell = newRow.insertCell();
            newText = document.createTextNode(newBook.read);
            newCell.appendChild(newText);
        }
    

    //let newCell = newRow.insertCell(newRow.cells.length);
    //    let newText = document.createTextNode(myLibrary[i].title);
    //    newCell.appendChild(newText);



        
    


//manually inserted some books to figure out display
myLibrary.push(new Book('The Hobbit', 'J. R. R. Tolkien', 295, 'not read yet'));
myLibrary.push(new Book('Narwhal and Jelly', 'Ben Clanton', 40, 'read'));
myLibrary.push(new Book('Elephant and Piggie', 'Mo Willems', 45, 'read'));

console.table(myLibrary);


for (i = 0; i < myLibrary.length; i++) {
    populateRow(myLibrary[i]);
}


const button = document.querySelector('button');
button.addEventListener('click', () => {
    addBookToLibrary();
})

