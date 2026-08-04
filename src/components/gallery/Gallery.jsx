
import { Link } from "react-router-dom";
import "./gallery.css";

const Gallery = () => {
  const images = [
    "Abeja.jpg",
    "Amarillo.jpg",
    "b1.jpg",
    "b7.jpeg",
    "b9.jpeg",
    "bAmarrilla.jpg",
    "bBlanca.jpg",
    "blusa.jpeg",
    "bRosa.jpg",
    "bRoja.jpg",
    "bVerde.jpg",
    "overol.jpg",
    "s1.jpeg",
    "s2.jpeg",
    "s3.jpeg",
    "ve2.jpeg",
    "Vestido.jpg"
  ];

  return (
  <div>
      <header className="header-container">
        <h1 className="header--title">Mi Galería de Ropa</h1>
      </header>
      <main>
        <section className="gallery">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={`/assets/img/ropa/${image}`}
                alt={`Imagen ${index + 1}`}
              />
            </div>
          ))}
        </section>

        <button className="boton">
          <span>
            <Link to="/">Volver</Link>
          </span>
        </button>
      </main>

      
        <p>© 2025 Mi Galería de Imágenes. Todos los derechos reservados.</p>
      
    </div>
  );
};
  

export default Gallery;
