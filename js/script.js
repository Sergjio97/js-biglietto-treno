// alert ("Hello world")

let km = prompt("Quanti km devi percorrere?");

let anni = prompt("Inserisci la tua età");

let prezzo = 0.21 * km; 

if (anni < 18) {
    prezzo = 0.21 * km - 0.21 * km * 20 / 100
} else if (anni > 65) {
    prezzo = 0.21 * km - 0.21 * km * 40 / 100
}

document.getElementById("costo").innerHTML = "€" + " " + prezzo.toFixed(2);