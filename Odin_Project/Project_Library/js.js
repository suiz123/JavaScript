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



function createLibrary(){   

    myLibrary.sort((a, b) => a.name.localeCompare(b.name));

    tabla.innerHTML = '';
    
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

    for (let i = 0; i < myLibrary.length; i++) {
        const tr = document.createElement('tr');
        tr.setAttribute('id', `tr${i+1}`)
        let libro = myLibrary[i];
        
        for (let l in libro){
            const td = document.createElement('td');
            td.style.cssText='padding: 10px; border: 2px solid; text-align: left;';
            td.textContent= libro[l];
            tr.append(td);
            
        }
        tabla.appendChild(tr);
        
    }
    
};




//Boton Div

let boton = document.createElement('button');
boton.setAttribute('id', 'boton');
boton.textContent='Añadir Libro';

boton.addEventListener('click',() => {
    addBookToLibrary();
    
    createLibrary();
    
    library.appendChild(tabla);
    console.log(myLibrary);
    
})

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


fragment.appendChild(boton);



// Dialog

const dialog = document.createElement('dialog');








document.body.appendChild(fragment);
