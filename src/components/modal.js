const Modal = ({ children, isOpen, onClose, title }) => {

   return (
      <div className={`modal ${isOpen ? "is-active" : ""}`}>
         <div className="modal-background" onClick={onClose}></div>
         <div className="modal-card">
            <header className="modal-card-head">
               <p className="modal-card-title">{`Detalles Lender ${title}`}</p>
               <button className="delete" aria-label="close" onClick={onClose}></button>
            </header>
            <section className="modal-card-body">
               {children}
            </section>
            <footer className="modal-card-foot">
               <button className="button is-outlined is-link" onClick={onClose}>Cerrar</button>
            </footer>
         </div>
      </div>
   );
};

export default Modal;
