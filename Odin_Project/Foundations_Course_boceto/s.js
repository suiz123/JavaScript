
function createDivs(alto, ancho){
    
    const fragmet = document.createDocumentFragment();
    const abueloDiv = document.createElement('div');
    abueloDiv.setAttribute('id','abuelo');
    fragmet.appendChild(abueloDiv);
    

    for (let i = 0; i < alto; i++) {

        const padreDiv = document.createElement('div');
        

        padreDiv.classList='padre';
        padreDiv.style.flex= 1;
        abueloDiv.appendChild(padreDiv)
        
        

        
        for (let i = 0; i < ancho; i++) {
            const nuevoDiv = document.createElement('div');
            nuevoDiv.classList=`divs`;
            nuevoDiv.style.cssText="background-color: red; border-style: solid; border-color: blue; border-radius: 2px;};";
            nuevoDiv.addEventListener("mouseover", function(){nuevoDiv.style.background='yellow'}) 
            
            padreDiv.appendChild(nuevoDiv);
        };
    

    };

    return fragmet;
};



function crearBoton(){
    const divButtom= document.createElement('div');
    divButtom.classList='divButtom'


    const button = document.createElement('button');
    button.classList='button'
    button.style.cssText=" border-style: solid; border-color: purple; border-radius: 2px";
    button.textContent='Cambiar tamaño del cuadrado'

    button.onclick = () => {
        ancho = parseInt(prompt('que ancho quieres que tenga: '));
        alto = parseInt(prompt('que alto quieres que tenga: '));

        if (isNaN(ancho) || isNaN(alto)) {
            alert("Debes ingresar números válidos.");
            return; 
        }
        
        let borrar = document.getElementById('abuelo');
        let nodo = document.getElementById('bigDiv');
        nodo.removeChild( borrar);

        const frag = createDivs(alto, ancho);

        nodo.appendChild(frag);
      };

    divButtom.appendChild(button);

    return divButtom;
}





//alto=16
//ancho=16



let divButtom = crearBoton();
let divsInicio = createDivs(16,16);

let bigDiv = document.createElement('div');

bigDiv.appendChild(divButtom);
bigDiv.appendChild(divsInicio);

bigDiv.setAttribute('id','bigDiv');
document.body.appendChild(bigDiv);


