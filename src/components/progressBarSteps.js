import React from "react";

function calcularProporciones(numCampos) {
   const total = 100;
   const proporcionInicial = 100 / numCampos;

   let proporcionActual = proporcionInicial;
   let proporciones = [];

   for (let i = 0; i < numCampos - 1; i++) {
      proporciones.push(proporcionActual);
      proporcionActual = proporcionActual * (1 - proporcionActual / total);
   }

   proporciones.push(total - proporciones.reduce((a, b) => a + b, 0));
   proporciones.sort((a, b) => a - b)
   proporciones = proporciones.reverse();

   return proporciones;
}

const ProgressBar = ({ steps }) => {
   console.log(steps)
   const proporciones = calcularProporciones(steps.length);

   return (
      <div className="progress has-background-grey-light" style={{ height: "15px" }} >
         {steps.map((step, index) => (
            <React.Fragment key={`step-${index}`}>
               <div
                  key={step.porcentaje}
                  className={`progress-bar is-${step.color} progress-bar-striped progress-bar-animated`}
                  role="progressbar"
                  style={{ width: `${step.porcentaje}%` }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="50"
               >
                  {step.text}
               </div>
               <div
                  key={index}
                  className={`progress-bar is-ligth-${step.color}`}
                  role="progressbar"
                  style={{ width: `${proporciones[index] - step.porcentaje}%` }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="50"
               >
                  <span className="top">{step.total_docs}</span>
                  <span className="bottom">{step.corte}</span>
               </div>
            </React.Fragment>
         ))}
      </div>
   );
}

export default ProgressBar;
