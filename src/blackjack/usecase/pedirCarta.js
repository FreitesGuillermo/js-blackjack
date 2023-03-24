
export const PedirCarta = (deck) => {
  
    if ( deck.length === 0 || !deck) {
        throw 'No hay cartas en el deck';
    }
 const   carta =deck.pop();
    return  carta
}