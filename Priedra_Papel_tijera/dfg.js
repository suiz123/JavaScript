function getRobot() {
    const array = ['piedra', 'papel', 'tijera'];
    let choice = Math.floor(Math.random() * 3);
    return array[choice];
}

function getHuman() {
    let choice = prompt('Ingresa piedra, papel o tijera:').trim().toLowerCase();
    return choice;
}

function game(human, robot) {
    if (human === robot) {
        console.log(`Es un empate con ${human}`);
    } else if (human === 'papel') {
        if (robot === 'tijera') {
            console.log(`Gana el robot con ${robot}`);
        } else {
            console.log(`Has ganado con ${human}`);
        }
    } else if (human === 'piedra') {
        if (robot === 'papel') {
            console.log(`Gana el robot con ${robot}`);
        } else {
            console.log(`Has ganado con ${human}`);
        }
    } else if (human === 'tijera') {
        if (robot === 'piedra') {
            console.log(`Gana el robot con ${robot}`);
        } else {
            console.log(`Has ganado con ${human}`);
        }
    } else {
        console.log("Entrada no válida. Intenta de nuevo.");
    }
}

let g = game(getHuman(), getRobot());
console.log(g);
