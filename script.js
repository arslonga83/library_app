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

//toggle read status function
Book.prototype.toggle = function() {
    if (this.read == true) {
        this.read = false;
    }
    else {
        this.read = true;
    }
}

//collect info for a new book and add it to the library
function addBookToLibrary() {
    const newBook = new Book();
    newBook.title = prompt("Title: ");
    newBook.author = prompt("Author: ");
    newBook.pages = prompt("Pages: ");
    newBook.read = prompt("Read? (yes or no)");
    if (newBook.read == 'yes') {    //convert user response to boolean
        newBook.read = true;
    }
    else {
        newBook.read = false;
    }
    myLibrary.push(newBook);
    document.querySelector('#tableBody').innerHTML = ""; //clear and remake table
    makeTable(myLibrary);
}

// this function make the table from myLibrary
function makeTable(myLibrary) {   
    let table = document.querySelector('tbody'); 
    for (i = 0; i < myLibrary.length; i++) {
        let newRow = table.insertRow();
        newRow.setAttribute('id', i);
        for (j = 0; j < 3; j++) { 
            let newCell = newRow.insertCell();
            let newText = document.createTextNode(Object.values(myLibrary[i])[j]); //adds book info
            newCell.appendChild(newText);
        }
        newCell = newRow.insertCell();   //create checkboxes
        newCell.classList.add('checkboxCell');
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('checkbox');
        checkbox.dataset.index = i;
        if (Object.values(myLibrary[i])[3] == true) {
            checkbox.checked = true;
        }
        newCell.appendChild(checkbox);
        newCell = newRow.insertCell(); //create delete buttons
        newCell.classList.add('buttonCell');
        let button = document.createElement('button');
        button.dataset.index = i;
        button.classList.add('deleteButton');
        newCell.appendChild(button);  
    }
    createDelete(); //link event listeners
    createCheckbox(); //link event listeners
    console.table(myLibrary);
}

//adds event listener to New Book button
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
                   document.querySelector('#tableBody').innerHTML = "";
                   makeTable(myLibrary);
               }
            }
         })
    })
}

//adds event listener to read status checkboxes
function createCheckbox() {
    document.querySelectorAll('.checkbox').forEach(item => {
        item.addEventListener('change', () => {
            index = item.dataset.index;
            for (i = 0; i <= index; i++) {
                if (i == index) {
                    myLibrary[i].toggle();
                    document.querySelector('#tableBody').innerHTML = "";
                    makeTable(myLibrary);
                }
            }
        })
    })
}

//manually inserted some books to figure out display
myLibrary.push(new Book('The Hobbit', 'J. R. R. Tolkien', 295, false));
myLibrary.push(new Book('Narwhal and Jelly', 'Ben Clanton', 40, true));
myLibrary.push(new Book('Elephant and Piggie', 'Mo Willems', 45, true));
makeTable(myLibrary);



    


