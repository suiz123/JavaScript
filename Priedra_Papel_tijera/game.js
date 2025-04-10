
//CUIDADO CON NO CERRAR BIEN LOS {} Y TERMINAR CON ; SIMEPRE!!!!!!!!!!!!!!!!!!!!! 

function getRobot(){
    
    const array=['piedra','papel', 'tijera'];
    let choice= Math.floor(Math.random() * 3);
    return array[choice];

}


function getHuman(){

    let choice = prompt('ingresa piedra papel o tijera: ').trim().toLowerCase();
    return choice;
}


function game(human, robot){


    if (human === robot){
        console.log('Empate')
    }else if (human === 'papel'){
        if (robot === 'tijeras'){
            alert(`Gana el robot con ${robot}`);
        }else{
            console.log(`Has ganado con ${human}`);
        }
    }else if(human === 'piedra'){
        if (robot === 'papel'){
            console.log(`Gana el robot con ${robot}`);
        }else{
            console.log(`Has ganado con ${human}`);
        }
    }else if(human === 'tijeras'){
        if (robot === 'piedra'){
            console.log(`Gana el robot con ${robot}`);
        }else{
            console.log(`Has ganado con ${human}`);
        }
    }else{
        console.log('Entrada no válida: ')
        
    }
};

let g = game(getHuman(), getRobot()); 
console.log(g);

const div1 = document.getElementById('container2');

const div1_1 = document.createElement('div');

div1_1.classList.add('prueba');
div1_1.style.color='red';

let nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent= 'hola soy un nuevo parrafo';
nuevoParrafo.style.color='blue';

let h3 = document.createElement('h3');
h3.textContent='Im red bro h3';
h3.style.color='red';

div1_1.appendChild(h3);
div1_1.appendChild(nuevoParrafo);

div1.appendChild(div1_1);

const div2 = document.createElement('div');
div2.style.cssText="border-color: black; background-color:pink; border-width: 5px;";

const h1 =  document.createElement('h1');
h1.textContent= 'Im a div';

let p = document.createElement('p');
p.textContent= 'ME TOO!';

let bottom= document.createElement('button');
bottom.classList='buttom';
bottom.textContent='click me';
bottom.onclick= () => alert('hello');

div2.appendChild(h1);
div2.appendChild(p);
div2.appendChild(bottom);
document.body.append(div2);







