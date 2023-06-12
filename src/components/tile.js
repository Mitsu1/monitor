
const Tile = ({left,rigth}) => {

   return (
      <>
         <div className="tile is-ancestor">
            <div className="tile is-vertical is-5">
               <div className="tile">
                  <div className="tile-a is-parent is-vertical">
                     <article className="tile is-child notification is-white">
                        {left}
                     </article>
                  </div>
               </div>
            </div>
            <div className="tile is-vertical is-7">
               <div className="tile">
                  <div className="tile is-child is-vertical">
                     <article className="tile is-child notification is-white">
                        {rigth}
                     </article>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
export default Tile;