
array = [];

function CreateBook(id, name, author) {
    this.id = id;
    this.name = name;
    this.author = author;
};

function addBookToLibrary() {

    const id = crypto.randomUUID();
    const name = prompt("Ingresa el nombre del libro:");
    const author = prompt("Ingresa el autor del libro:");
    //const date = prompt("Ingresa la fecha de publicación del libro:");
    
    let book = new CreateBook(id, name, author );
    
    array.push(book);

};

addBookToLibrary();

console.log(array)