const CheckBoxButton = ({ list, active, handleButtonClick }) => {
   
   return (
      <>
         <div className="section">
            <div className="field is-grouped is-grouped-center is-flex-wrap-wrap">
               {list.map((element) => (
                  <div className="block" key={element}>
                     <span className="control">
                        <label className="is-checkbox is-small is-rounded">
                           <input id={element} type="checkbox"
                              checked={active.includes(element)}
                              onChange={() => handleButtonClick(element)}
                           />
                           <span className="icon checkmark"><i className="fa fa-check" /></span>
                           <span>{element}</span>
                        </label>
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}
export default CheckBoxButton;