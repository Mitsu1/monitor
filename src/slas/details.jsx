
import Modal from "../components/modal";
import Table from "../components/table";
import Tabs from "../components/tabs";
//import useTabs from "../hooks/useTabNavigation";

const documentos = {
   columna1: [1, 1, 1],
   columna2: ['08:00:00', '15:00:00', '17:00:00'],
   columna3: [350, 150, 320],
   columna4: [210, 100, 200],
   columna5: [140, 50, 120],
   columna6: ['si', 'si', 'si'],
   columna7: ['35%', '55%', '80%']
}

const operadores = {
   Total: [61],
   Proceso1: [30], 'Eficiencia-P1': ['85%'],
   Proceso2: [15], 'Eficiencia-P2': ['92%'],
   Proceso3: [16], 'Eficiencia-P3': ['87%'],
}
const tabList = [
   {
      name: "Documentos",
      icon: "file-alt",
      content: <Table elements={documentos}/>
   }, {
      name: "Operadores",
      icon: "users",
      content: <Table elements={operadores}/>
   },
];

export default function Details(props) {
   return (
      <>
         <Modal isOpen={props.isOpen} onClose={props.onClose} title={props.title}>
            <Tabs tabs = {tabList}/>      
         </Modal>
      </>
   );
}