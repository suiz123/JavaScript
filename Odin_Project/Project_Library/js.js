const myLibrary = [];

function CreateBook(name, author, id) {
    
    this.name = name;
    this.author = author;
    this.id = id;
    
    
    
};

function addBookToLibrary() {

    const id = crypto.randomUUID();
    const name = prompt("Ingresa el nombre del libro:");
    const author = prompt("Ingresa el autor del libro:");
    //const date = prompt("Ingresa la fecha de publicación del libro:");
    
    let book = new CreateBook(name, author, id);
    
    myLibrary.push(book);

};


console.log(myLibrary);
addBookToLibrary();

//Conjunto fragmento para añadir al body.

const fragment = document.createDocumentFragment();

// Div Todo el conjunto

let divPadre = document.createElement('div');
divPadre.setAttribute('id', 'divPadre');

fragment.appendChild(divPadre);

//Div Libreria (Contiene la tabla)

let library = document.createElement('div');
library.setAttribute('id', 'library');

divPadre.appendChild(library);

        //Creacion Tabla
const tabla = document.createElement('table');
tabla.style.cssText= "width: 100%; font-family: arial, sans-serif;border-collapse: collapse;";

const tr = document.createElement('tr');
tr.style.cssText='background-color:rgba(201, 163, 50, 0.62)'
const th = document.createElement('th');
th.textContent= 'Nombre';
const th1 = document.createElement('th');
th1.textContent= 'Autor';
const th2 = document.createElement('th');
th2.textContent= 'ID';
tr.append(th, th1, th2);
tabla.append(tr);
library.appendChild(tabla);


//Boton Div

let boton = document.createElement('button');
boton.setAttribute('id', 'boton');
boton.textContent='Añadir Libro';



fragment.appendChild(boton);

//Blucle para cada elemento la matriz
for (let i = 0; i < myLibrary.length; i++) {
    const tr = document.createElement('tr');
    
    let libro = myLibrary[i];
   
    for (let l in libro){
        const td = document.createElement('td');
        td.style.cssText='padding: 10px; border: 2px solid; text-align: left;';
        td.textContent= libro[l];
        tr.append(td);
        
    }
    tabla.append(tr);

}




document.body.appendChild(fragment);
