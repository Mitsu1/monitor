
const Columns = ({ left, rigth }) => {

   return (
      <>
         <div className="column">{left}</div>
         <div className="column">{rigth}</div>
      </>
   );
}
export default Columns;