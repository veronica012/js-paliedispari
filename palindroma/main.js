var parola = prompt('Inserisci una parola');
console.log(parola);
var lettere = parola.split('');
console.log(lettere);
var lettere_reverse = lettere.reverse();
console.log(lettere_reverse);
var parola_join = lettere_reverse.join('');
console.log(parola_join);
if (parola != parola_join) {
    console.log('La parola non è palindroma');
} else {
    console.log('La parola è palindroma')
}
