import React from "react";

//import ProgressBarSteps from '../components/progressBarSteps';
//import Pagination from '../components/pagination';
import Card from '../components/card';
import Tile from "../components/tile";
import Table from "../components/table";
import BarChart from "../components/barChart";
import CheckBoxButton from '../components/checkBoxButton';
import useSelectedButtons from '../hooks/useSelectedButtons';

export default function Monitor() {

   const lista = [
      'numero1','numero2','numero3', 'TODOS'];

   const tabla1 = {
      Columna1:[1,1,1],
      Columna2: ['08:00:00','15:00:00','17:00:00'], 
      Columna3: [350,150,320], 
      Columna4: [210,100,200], 
      Columna5: [140,50,120], 
      Columna6: ['si','si','si'], 
      Columna7: ['35%','55%','80%']
   }
   
   let { selectedButtons, handleButtonClick } = useSelectedButtons(lista);

   return (
      <>
         <div className="Monitor">
            <CheckBoxButton list={lista} active={selectedButtons} handleButtonClick={handleButtonClick} />
            {selectedButtons.map((button, index) => (            
               <Card title={`Boton: ${button}`} key={index}>
                  <Tile
                     left={
                        <>
                           <BarChart bars={
                              [
                                 { labels: 'Barra 1', level1: 30, level2: 50, level3: 80, level4: 100},
                                 { labels: 'Barra 2', level1: 45, level2: 10, level3: 20, level4: 25 },
                                 { labels: 'Barra 3', level1: 15, level2: 25, level3: 30, level4: 30 },
                                 { labels: 'Barra 4', level1: 15, level2: 25, level3: 30 },
                              ]
                           } />
                        </>
                     }
                     rigth={
                        <>
                           <h5>Parte 1</h5>
                           <Table elements={tabla1} />
                           <h5>Parte 2</h5>
                           <Table elements={
                              {
                                 Total: [61], 
                                 Elemento1: [30],'Eficiencia%1':['85%'],
                                 Elemento2: [15],'Eficiencia%2':['92%'],
                                 Elemento3: [16],'Eficiencia%3':['87%'],
                              }
                           } />
                        </>
                     }>
                  </Tile>
               </Card>
            ))}
         </div>
      </>
   );
}
//<div className="ProgressBarSteps">
//    <ProgressBarSteps />
//    <Pagination />
//</div>