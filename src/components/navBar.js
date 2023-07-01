import React from "react";

const NavBar = ({ reference }) => {

   const chunkSize = 18;

   const chunkedArrays = [];
   let startIndex = 0;

   for (let i = 0; i < Math.ceil(reference.length / chunkSize); i++) {
      const chunkedArray = reference.slice(startIndex, startIndex + chunkSize);
      chunkedArrays.push(chunkedArray);
      startIndex += chunkSize;
   }
   console.log(chunkedArrays)
   return (
      <nav className="navbar is-transparent is-fixed-top" role='navigation' aria-label="main navigation">
         <div className="navbar-menu" id="navMenu" >
            <div className="navbar-start">
               <table className="table">
                  <tbody>
                     {chunkedArrays.map((element, index) => (
                        <tr key={index}>
                           {element.map((text, index) => (
                              <td key={index}>
                                 <a className="navbar-item" href={`#${text}`}>
                                    {text}
                                 </a>
                              </td>
                           ))}
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
