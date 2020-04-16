/**********************************************
 *  SIMON SAYS
 * 
 *  Un alert espone 5 numeri casuali (univoci).
 *  Da li parte un timer di 30 secondi 
 *  Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
 *  Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
 ******************************************************************************************************************************/

// array vuoto con generazione numeri random

var randomNumber = []; //array vuoto per i numeri casuali

// genero i numeri random controllo che non siano uguali e li pusho dentro l'array vuoto 
for (var i = 0; randomNumber.length < 5; i++) {

    var numero = getRandomNumber(1, 100)

    if (!randomNumber.includes(numero)) {
        randomNumber.push(numero)
    }
}

alert('Numeri Generati Casualmete da Ricordare: \n' + randomNumber) //alert per far vedere i numeri
console.log(randomNumber);


var numberUtente = []; //array per salvare i numeri dell'utente
var sceltaUtente; //var per richiedere il numero all'utente

// richiesta dopo 30 secondi di inserire i numeri

var interval = setInterval(function () {  

    for (var i = 0; numberUtente.length < 5; i++) {
        sceltaUtente = parseInt(prompt('Inserisci un Numero'));

        if (!numberUtente.includes(+sceltaUtente))
            numberUtente.push(+sceltaUtente);
        else {
            alert('hai gia inserito questo numero')
        }
    }

    console.log(numberUtente);
    

    var matchNumber = [];
    
    // numeri uguali tra i due array
    for (var i = 0; i < randomNumber.length; i++) {
        var trovati = numberUtente[i];
        if (randomNumber.includes(trovati)) {
            matchNumber.push(trovati)
        }
    }


    alert('Numeri da Ricordare: ' + randomNumber + '\nPunteggio: ' + matchNumber.length  + '\nNumeri Ricordati: ' + matchNumber)
    console.log(matchNumber);
    

    clearInterval(interval);
    
}, 30000); //inserico tempo minore per per non aspettare 30 secondi (30000)




/** 
 * Function
*/
// Function per generare numeri random
function getRandomNumber(min, max) {
    var random = Math.floor(Math.random()* max - min + 1) + min;
    return random
}