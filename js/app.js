function calcoloPrezzoBiglietto() {
    // chiedere all'utente il numero di chilometri che vuole percorrere
    const chilometriDaPercorrere = parseInt(prompt(`Quanti chilometri vuoi percorrere?`));
    // chiedere l'età del passeggero.
    const etaPasseggero = parseInt(prompt(`Quanti anni hai?`));

    // calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km)
    let prezzoBiglietto = chilometriDaPercorrere * 0.21;

    // va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
    if (etaPasseggero < 18) {
        prezzoBiglietto *= 0.8;
    } else if (etaPasseggero >= 65) {
        prezzoBiglietto *= 0.6;
    }

    // L'output del prezzo finale
    document.getElementById('prezzoTotaleBiglietto').innerHTML = `Il tuo biglietto costerà: ${prezzoBiglietto.toFixed(2)} €`;

    // pulsante nascosto finchè non inseriamo i dati la prima volta
    document.querySelector("#recalculateTicketPriceButton").style.display = "block";    
}

// ricalcola prezzo biglietto on click
document.querySelector("#recalculateTicketPriceButton").addEventListener("click", calcoloPrezzoBiglietto);