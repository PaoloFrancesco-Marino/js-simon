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

alert('Numeri Generati Casualmete: \n' + randomNumber) //alert per far vedere i numeri
console.log(randomNumber);


var numberUtente = []; //array per salvare i numeri dell'utente
var sceltaUtente; //var per richiedere il numero all'utente

// richiesta dopo 30 secondi di inserire i numeri

setTimeout(function () {  

    for (var i = 0; numberUtente.length < 5; i++) {
        sceltaUtente = prompt('Inserisci un Numero');

        if (!numberUtente.includes(+sceltaUtente))
            numberUtente.push(+sceltaUtente);
        else {
            alert('hai gia inserito questo numero')
        }
    }

    console.log(numberUtente);
    alert('Numeri Iniziali: ' + randomNumber + '\n Numeri inseriti: ' + numberUtente)

    var find = 0;
    // numeri uguali tra i due array
    for (var i = 0; i < randomNumber.length; i++) {

        if (randomNumber.includes(numberUtente)) {
            find++;
        }
    }

    console.log(find);
    

}, 1000);

















/** 
 * Function
*/
// Function per generare numeri random
function getRandomNumber(min, max) {
    var random = Math.floor(Math.random()* max - min + 1) + min;
    return random
}