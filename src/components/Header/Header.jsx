import { useLocation, Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const location = useLocation();

  const hideButtonRoutes = ["/gallery", "/accesorios", "/amigurumis"];
  const shouldHideButton = hideButtonRoutes.includes(location.pathname);

  return (
    <header>
      <img src="/assets/icons/logo2.png" alt="Logo de Bordados Jackie" />
      <div className="header--title-container">
        <h1>La belleza del arte hecho a mano</h1>
        <p>
          En Bordados Jackie, combinamos creatividad y pasión para ofrecer piezas
          únicas en bordados y tejidos.
        </p>
      
          {!shouldHideButton && (
          <Link to="/gallery" className="header--button">
            Descubre más
          </Link>
        )}
        
      </div>
    </header>
  );
};

export default Header;