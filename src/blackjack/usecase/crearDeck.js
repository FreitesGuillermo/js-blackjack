  
  import _ from 'underscore'
  // Esta función crea un nuevo deck
  /**
   * @param {Array<string>}cartatipos ejemplo: ['C','D','H','S']
   * @param {Array<string>}especiales ejemplo: ['A','J','Q','K']
   * @returns {Array} retorna un arreglo de cartas 
   *  */ 
 export  const crearDeck = (cartatipos, especiales) => {
    if (!cartatipos ||  !cartatipos.length ) throw new Error ('Tipos cartatipos es obligatorio') 
   
   let deck=[];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of cartatipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of cartatipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );

    deck =_.shuffle( deck );
    return  deck
    
}