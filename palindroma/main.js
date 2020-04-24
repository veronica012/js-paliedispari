var parola_utente = prompt('Inserisci una parola');
console.log(parola_utente);
var parola_palindroma = palindroma(parola_utente);

if (parola_utente != parola_palindroma) {
    console.log('La parola non è palindroma');
} else {
    console.log('La parola è palindroma')
}

function palindroma(parola) {
    var lettere = parola.split('');
    console.log(lettere);
    var lettere_reverse = lettere.reverse();
    console.log(lettere_reverse);
    var parola_join = lettere_reverse.join('');
    console.log(parola_join);

    return parola_join;
}
