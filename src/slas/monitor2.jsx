import React from "react";

import Card from '../components/card';
import CheckBoxButton from '../components/checkBoxButton';
import useSelectedButtons from '../hooks/useSelectedButtons';
import ProgressBar from "../components/progressBarSteps";
//import Table from "../components/table";
//import NavBar from "../components/navBar";

function crearPares(arr) {
   const pares = [];
   for (let i = 0; i < arr.length; i += 3) {
      const par = arr.slice(i, i + 3);
      pares.push(par);
   }
   return pares;
}
export default function Monitor() {

   const lenders = [
      '1009', '1024', '1027', '1029', '1043', '2009', '2013', '2015', '2017', '2019', '2020', '2021', '2024', '2025', '2027', '2029', '2034', '2039', '2040', '2049', '2050', '2055', '2060', '2061', '2062', '2065', '2068', '2070', '2071', '2072', '2073', '2075', '2076', '2077', '2078', '2079', '2080', '2081', '2082', '2083', '2084', '2086', '2087', '2089', '2090', '2092', '2093', '2094', '2095', '2096', '2099', '2102', '2104', '2106', '2110', '2114', '2116', '2120', '2123', '2124', '2126', '2128', '2179', '3025', '4024', '4025', 'slm', 'TODOS'];

   const steps =
   {
      Primer: [
         { color: "success", text: "350", corte: "14:00 hrs", total_docs: "350 docs", porcentaje: "30" },
         { color: "warning", text: "200", corte: "23:00 hrs", total_docs: "250 docs", porcentaje: "20" },
         { color: "success", text: "120", corte: "23:00 hrs", total_docs: "120 docs", porcentaje: "10" },
         { color: "danger", text: "40", corte: "23:00 hrs", total_docs: "40 docs", porcentaje: "5" },
      ],
      Segundo: [
         { color: "success", text: "350", corte: "14:00 hrs", total_docs: "350 docs", porcentaje: "30" },
         { color: "warning", text: "200", corte: "23:00 hrs", total_docs: "250 docs", porcentaje: "20" },
         { color: "success", text: "120", corte: "23:00 hrs", total_docs: "120 docs", porcentaje: "10" },
         { color: "danger", text: "40", corte: "23:00 hrs", total_docs: "40 docs", porcentaje: "5" },
      ],
      Tercer: [
         { color: "success", text: "350", corte: "14:00 hrs", total_docs: "350 docs", porcentaje: "30" },
         { color: "warning", text: "200", corte: "23:00 hrs", total_docs: "250 docs", porcentaje: "20" },
         { color: "success", text: "120", corte: "23:00 hrs", total_docs: "120 docs", porcentaje: "10" },
         { color: "danger", text: "40", corte: "23:00 hrs", total_docs: "40 docs", porcentaje: "5" },
      ],
      Cuarto: [
         { color: "success", text: "350", corte: "14:00 hrs", total_docs: "350 docs", porcentaje: "30" },
         { color: "warning", text: "200", corte: "23:00 hrs", total_docs: "250 docs", porcentaje: "20" },
         { color: "success", text: "120", corte: "23:00 hrs", total_docs: "120 docs", porcentaje: "10" },
         { color: "danger", text: "40", corte: "23:00 hrs", total_docs: "40 docs", porcentaje: "5" },
      ]
   }
   const step = [
      { color: "initial", text: "350", corte: "14:00 hrs", total_docs: "350 docs", porcentaje: "30" },
      { color: "warning", text: "200", corte: "23:00 hrs", total_docs: "250 docs", porcentaje: "20" },
      { color: "success", text: "120", corte: "23:00 hrs", total_docs: "120 docs", porcentaje: "10" },
      { color: "danger", text: "40", corte: "23:00 hrs", total_docs: "40 docs", porcentaje: "5" },
   ];

   const { selectedButtons, handleButtonClick } = useSelectedButtons(lenders);
   const options = selectedButtons.filter(element => element !== 'TODOS');
   const arrayPares = crearPares(options);

   return (
      <>
         {/* {options.length >= 4 && <NavBar reference={options} />} */}
         <CheckBoxButton list={lenders} active={selectedButtons} handleButtonClick={handleButtonClick} />
         
         {arrayPares.map((lenders, index) => (
            <div className="columns is-gapless" key={index}>
               {lenders.map((lender, i) => (
                  <div className="column is-one-third" key={i}>
                     <Card title={`Ejemplo`} id={1}>
                        <div className="table-container">
                           <table className="table">
                              <tbody>
                                 <tr>
                                    <td>
                                       <ProgressBar steps={step} />
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </Card>
                     <Card title={`${lender}`} id={lender}>
                        <div className="table-container">
                           <table className="table">
                              <tbody>
                                 {Object.keys(steps).map((key) => (
                                    <React.Fragment key={key}>
                                       <tr><th className="left">{key} Corte</th></tr>
                                       <tr>
                                          <td>
                                             <ProgressBar steps={steps[key]} />
                                          </td>
                                       </tr>
                                    </React.Fragment>
                                 ))}
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
