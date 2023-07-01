
const Tile = ({left,rigth,leftSize,rigthSize}) => {

   let verticalLeft = leftSize || 3
   let verticalRigth = rigthSize || 4  
   return (
      <>
         <div className="tile is-ancestor">
            <div className={`tile is-vertical is-${verticalLeft}`}>
               <div className="tile">
                  <div className="tile-a is-parent is-vertical">
                     <article className="tile is-child notification ">
                        {left}
                     </article>
                  </div>
               </div>
            </div>
            <div className={`tile is-vertical is-${verticalRigth}`}>
               <div className="tile">
                  <div className="tile is-child is-vertical">
                     <article className="tile is-child notification ">
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