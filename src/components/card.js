
const Card = ({title,children}) => {

  return (
    <>
      <div className="section">
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
            <p className="card-footer-item">
              <button className="button is-danger is-rounded">Siguiente</button>
            </p>
          </footer>  
        </div>
      </div>
    </>
  );
}
export default Card;