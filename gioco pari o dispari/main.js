//chiedi all'utente un numero tra 1 e 5
var numero_utente = parseInt(prompt('Inserisci un numero compreso tra 1 e 5'));
console.log('Hai inserito il numero ' + numero_utente);
if(numero_utente > 5) {
    console.log('Hai inserito un numero maggiore di 5! Hai perso!')
}
var scelta_utente = prompt('Scegli: Pari o dispari?');
console.log('Hai scelto ' + scelta_utente);
scelta_utente = scelta_utente.toLowerCase();
var numero_computer = (Math.floor(Math.random() * 5) + 1);
console.log(numero_computer);
// var somma = numero_utente + numero_computer;
// console.log(somma);
var somma = sommaNumeri(numero_utente, numero_computer);
console.log( 'La somma è ' + somma);
if (somma % 2 == 0) {
    if ( scelta_utente == 'pari') {
        console.log('Hai vinto');
    } else {
        console.log('Hai perso');
    }
} else {
    if ( scelta_utente == 'dispari') {
        console.log('Hai vinto');
    } else {
        console.log('Hai perso');
    }
}

function sommaNumeri(numero1, numero2) {
    var risultato = numero1 + numero2;
    return risultato;
}
