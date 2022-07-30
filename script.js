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
    newBook.read = prompt("Read? (type 0 for no and 1 for yes)");
    myLibrary.push(newBook);
    document.querySelector('#tableBody').innerHTML = "";
    makeTable(myLibrary);
    console.table(myLibrary);
}

// this function make the table from myLibrary
function makeTable(myLibrary) {   
    let table = document.querySelector('tbody'); 
    for (i = 0; i < myLibrary.length; i++) {
        let newRow = table.insertRow();
        newRow.setAttribute('id', i);
        for (j = 0; j < 4; j++) {
            let newCell = newRow.insertCell();
            let newText = document.createTextNode(Object.values(myLibrary[i])[j]);
            newCell.appendChild(newText);
        }
        newCell = newRow.insertCell();
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        if (Object.values(myLibrary[i])[3] == true) {
            checkbox.checked = true;
        }
        newCell.appendChild(checkbox);
        newCell = newRow.insertCell();
        newCell.classList.add('buttonCell');
        let button = document.createElement('button');
        button.dataset.index = i;
        button.classList.add('deleteButton');
        newCell.appendChild(button);
        
    }
    createDelete();
    console.table(myLibrary);
}

//manually inserted some books to figure out display
myLibrary.push(new Book('The Hobbit', 'J. R. R. Tolkien', 295, false));
myLibrary.push(new Book('Narwhal and Jelly', 'Ben Clanton', 40, true));
myLibrary.push(new Book('Elephant and Piggie', 'Mo Willems', 45, true));

makeTable(myLibrary);

const button = document.querySelector('.new-book');
button.addEventListener('click', () => {
    addBookToLibrary();
})


//adds event listener on delete buttons and refreshes table when run
function createDelete() {
    document.querySelectorAll('.deleteButton').forEach(item => {
        item.addEventListener('click', () => {
            index = item.dataset.index;
            for (i = 0; i <= index; i++) {
               if (i == index) { 
                   myLibrary.splice(i, 1); 
                   //document.getElementById(i).remove();
                   console.table(myLibrary);
                   document.querySelector('#tableBody').innerHTML = "";
                   makeTable(myLibrary);
                   }
                }
            }
        )} 
    )}