import React from "react";

import Card from '../components/card';
//import Table from "../components/table";
import CheckBoxButton from '../components/checkBoxButton';
import useSelectedButtons from '../hooks/useSelectedButtons';
//import NavBar from "../components/navBar";
import ProgressBar from "../components/progressBarSteps";

function crearPares(arr) {
   const pares = [];
   for (let i = 0; i < arr.length; i += 3) {
      const par = arr.slice(i, i + 3);
      pares.push(par);
   }
   return pares;
}
export default function Monitor() {

   const opciones_ejemplo = [
      'opcion1', 'opcion2', 'opcion3', 'opcion4', 'opcion5', 'varios_al_mismo_tiempo', 'TODOS'];
      
   const steps = [
      { color: "info", text: "350", corte: "14:00 hrs", total_docs: "350 docs", porcentaje: "30" },
      { color: "warning", text: "200", corte: "23:00 hrs", total_docs: "250 docs", porcentaje: "20" },
      { color: "success", text: "120", corte: "23:00 hrs", total_docs: "120 docs", porcentaje: "10" },
      { color: "danger", text: "40", corte: "23:00 hrs", total_docs: "40 docs", porcentaje: "5" },
   ];

   const { selectedButtons, handleButtonClick } = useSelectedButtons(opciones_ejemplo);
   const options = selectedButtons.filter(element => element !== 'TODOS');
   const arrayPares = crearPares(options);

   return (
      <>
         {/* {options.length >= 4 && <NavBar reference={options} />} */}
         <CheckBoxButton list={opciones_ejemplo} active={selectedButtons} handleButtonClick={handleButtonClick} />
         {arrayPares.map((opciones_ejemplo, index) => (
            <div className="columns is-gapless" key={index}>
               {opciones_ejemplo.map((lender, i) => (
                  <div className="column is-one-third" key={i}>
                     <Card title={`${lender}`} id={lender}>
                        <div className="table-container">
                           <table className="table">
                              <tbody>
                                 <tr>
                                    <td>
                                       <ProgressBar steps={steps} />
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </Card>
                  </div>
               ))}
            </div>
         ))}
      </>
   );
}
