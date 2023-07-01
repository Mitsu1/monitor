import Details from "../slas/details";
import useModal from "../hooks/useModal";

const Card = ({ title, children }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <div className="section">
        <div className="card-content content is-clipped">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">{title}</p>
            </header>
            <div className="card-content">
              <div className="content">
                {children}
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <button className="button is-outlined is-link is-small" onClick={openModal}>Detalles</button>
                <Details isOpen={isModalOpen} onClose={closeModal} title={title}/>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;