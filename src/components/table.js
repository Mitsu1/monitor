import React from 'react';

const Table = ({ elements }) => {

   const keys = Object.keys(elements);

   const values = Object.values(elements).reduce((acumulador, arreglo) => {
      arreglo.forEach((valor, indice) => {
         if (acumulador[indice]) {
            acumulador[indice].push(valor);
         } else {
            acumulador[indice] = [valor];
         }
      });
      return acumulador;
   }, []);

   return (
      <>
         <div className="table-container">
            <table className="table-cell-text-align">
               <tbody>
                  <tr>
                     {keys.map((key) => (
                        <th key={key}>{key}</th>
                     ))}
                  </tr>
                  {values.map((value, index) => (
                     <tr key={index}>
                        {value.map((val, i) => (
                           <td key={i}>{val}</td>
                        ))}
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   );
}
export default Table;

// const elementos = {
//    columna1: [1, 1, 1],
//    columna2: ['08:00:00', '15:00:00', '17:00:00'],
//    columna3: [350, 150, 320],
//    columna4: [210, 100, 200],
//    columna5: [140, 50, 120],
//    columna6: ['si', 'si', 'si'],
//    columna7: ['35%', '55%', '80%']
// }