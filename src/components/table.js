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