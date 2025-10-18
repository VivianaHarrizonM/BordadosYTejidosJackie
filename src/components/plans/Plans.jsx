import "./plans.css";
import { Link } from "react-router-dom";

const Plans = () => {
  const plans = [
    {
      name: "Accesorios",
      price: 299,
      note: "*Manejamos mayoreo sobre pedido",
      link: "/gallery-accesorios",
    },
    {
      name: "Ropa",
      price: 399,
      note: "*Contamos con tallas y precios justos",
      link: "/gallery",
    },
    {
      name: "Amigurumi",
      price: 499,
      note: "*Diseños y precios únicos",
      link: "/gallery-amigurumi",
    },
  ];

  return (
    <section id="plans" className="main-plans-container">
      <div className="plans--title">
        <h2>Encuentra el regalo perfecto.</h2>
        <p>
          Cada opción incluye acceso a nuestras exclusivas colecciones y servicios
          personalizados.
        </p>
      </div>

      <section className="plans-container--slider">
        {plans.map((plan, index) => (
          <article
            key={index}
            className={`plans-container--card ${
              plan.name === "Ropa" ? "black-card" : ""
            }`}
          >
            <p className="plans-botton recommended">{plan.name}</p>
            <div className="plan-info-container">
              <p className="plan-card-price">
                <span>$</span> {plan.price}
              </p>
              <p className="plan-card--saving">{plan.note}</p>
              <button className="plan-card--ca">
                <span>
                  <Link to={plan.link}>Ver</Link>
                </span>
              </button>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Plans;
