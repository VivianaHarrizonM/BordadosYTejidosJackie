import { Link } from "react-router-dom";
import "./imagenes.css";
import "./gallery.css";

const Amigurumi = () => {
  const images = [
    "a1.jpeg",
    "a2.jpeg",
    "ac1.jpeg",
    "dino.jpeg",
    "l.jpeg",
    "luli1.jpeg",
    "m2.jpeg",
    "m9.jpeg",
    "m13.jpeg",
    "m14.jpeg",
    "oveja.jpeg",
    "unicuerno.jpeg",
  ];

  return (
    <div>
      <header className="header-container">
        <h1 className="header--title">Galería de Amigurumis</h1>
      </header>

      <main>
        <section className="gallery">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={`/assets/img/amigurumi/${image}`}
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

export default Amigurumi;