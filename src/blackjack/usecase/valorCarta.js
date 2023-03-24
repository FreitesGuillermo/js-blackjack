export const ValorCarta = ( carta ) => {
  
    const valor = carta.substring(0, carta.length - 1);
    // return ( isNaN( valor ) ) ? 
    //         ( valor === 'A' ) ? 11 : 10
    //         : valor * 1;

            // otr forma
            const valor2 = carta.slice(0,-1);
            return ( isNaN( valor2 ) ) ? 
            ( valor2 === 'A' ) ? 11 : 10
            : valor2 * 1;
}