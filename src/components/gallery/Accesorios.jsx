import { Link } from "react-router-dom";
import "./imagenes.css";
import "./gallery.css";

const Accesorios = () => {
  const images = [
    "9.jpeg",
    "bo1.jpeg",
    "bo2.jpeg",
    "bo3.jpeg",
    "colores.jpeg",
    "colores1.jpeg",
    "f1.jpeg",
    "f2.jpeg",
    "f3.jpeg",
    "f4.jpeg",
    "f5.jpeg",
    "f14.jpeg",
    "lonchera.jpeg",
    "r3.jpeg",
    "ra1.jpeg"
  ];

  return (
    <div>
      <header className="header-container">
        <h1 className="header--title">Galería de Accesorios</h1>
      </header>
      <main>
        <section className="gallery">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={`/assets/img/accesorios/${image}`}
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

export default Accesorios;
