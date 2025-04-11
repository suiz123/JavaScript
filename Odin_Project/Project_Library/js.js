let myLibrary = [];


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
    const thNombre = document.createElement('th');
    thNombre.textContent= 'Nombre';
    const thAutor = document.createElement('th');
    thAutor.textContent= 'Autor';
    const thId = document.createElement('th');
    thId.textContent= 'ID';
  
    tr.append(thNombre, thAutor, thId);
    tabla.append(tr);

    for (let i = 0; i < myLibrary.length; i++) {
        const tr = document.createElement('tr');
        tr.setAttribute('id', `tr${i+1}`);
        let libro = myLibrary[i];
        
        for (let l in libro){
            const td = document.createElement('td');
            

            td.style.cssText='padding: 10px; border: 2px solid; text-align: left;';
            td.textContent= libro[l];
            tr.append(td);
            
        };
        const tdBorrarButton = document.createElement('td');
        const borrarButton = document.createElement('button');
        
        borrarButton.textContent='Eliminar';
        borrarButton.style.cssText='padding: 10px; border: 2px solid; text-align: left; background-color: red;';
        borrarButton.addEventListener('click', () => {
            let nodoElement=borrarButton.parentNode;
            let nombre = nodoElement.children[0].innerText;
            let autor = nodoElement.children[1].innerText;
            let idd = nodoElement.children[2].innerText;
            console.log(nombre,autor,idd);

            myLibrary = myLibrary.filter(i => i.id !== idd);
            console.log(myLibrary);
            createLibrary();
        });
        
        tr.append(borrarButton);
        tabla.appendChild(tr);
        
    };
    
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
const thNombre = document.createElement('th');
thNombre.textContent= 'Nombre';
const thAutor = document.createElement('th');
thAutor.textContent= 'Autor';
const thId = document.createElement('th');
thId.textContent= 'ID';
const thBoton = document.createElement('th');
thBoton.textContent='Borrar elemento';
tr.append(thNombre, thAutor, thId, thBoton);
tabla.append(tr);
library.appendChild(tabla);


fragment.appendChild(boton);



// Dialog 


const dialog = document.createElement('dialog');
dialog.setAttribute('id', 'dialog');
dialog.style.cssText= "width: 25%; height: 20%";

const buttonsDiv=document.createElement('div');
buttonsDiv.id='buttonsDiv';
buttonsDiv.style.cssText="display: flex; justify-content: center; align-items: center; width: 100%;";


const showButton = document.createElement('button');
showButton.textContent= 'Añadir libro con dialog';
//showButton.style.cssText = "display: flex; justify-content: center; align-items: center; width: 100%; ";
showButton.setAttribute('id', 'showDialog');

buttonsDiv.append(boton,showButton);



const closeButton = document.createElement('button');
closeButton.setAttribute('id', 'closeDialog');
closeButton.textContent='Cerrar';

        //Dialog Formulario

const form = document.createElement('form');
form.setAttribute('method','dialog');

const labelNombre = document.createElement('label');
labelNombre.textContent='Nombre del libro: ';
const inputNombre = document.createElement('input');
inputNombre.id='inputNombre';
inputNombre.type = 'text';
inputNombre.name= 'Nombre';
labelNombre.append(inputNombre);

const saltoDeLinea=document.createElement('br');

const labelAutor = document.createElement('label');
labelAutor.textContent='Autor del libro: ';
const inputAutor = document.createElement('input');
inputAutor.id='inputAutor';
inputAutor.type='text';
labelAutor.append(inputAutor);

const inputSubmit= document.createElement('input');
inputSubmit.type='submit';
inputSubmit.value='Enviar';

inputSubmit.addEventListener('click',() => {

    event.preventDefault();
    const id = crypto.randomUUID();
    const name = document.getElementById('inputNombre').value;
    const author =  document.getElementById('inputAutor').value;
   
    
    let book = new CreateBook(name, author, id);
    
    myLibrary.push(book);

    createLibrary();
    dialog.close();
})

form.append(labelNombre,saltoDeLinea,labelAutor,document.createElement('br'), inputSubmit);



dialog.append( form,closeButton);



showButton.addEventListener('click', () => {
    dialog.showModal();

});

closeButton.addEventListener('click', () => {
    dialog.close();
});


fragment.appendChild(dialog);
fragment.appendChild(buttonsDiv);









document.body.appendChild(fragment);











