import './products.css';

const ProductDetail = () => {
  return (
    <section className="main-product-detail">
      <span className="product-detail--batata-logo"></span>
      <div className="product-detail--title">
        <h2>Piezas hechas para durar.</h2>
        <p>Calidad excepcional en cada bordado y tejido que creamos.</p>
      </div>
      <section className="product-cards-container">
        {[
          {
            icon: "thread",
            title: "Materiales de calidad",
            description:
              "Utilizamos los mejores hilos y telas para garantizar la durabilidad de nuestros productos.",
          },
          {
            icon: "needle",
            title: "Diseños únicos",
            description:
              "Cada pieza es diseñada pensando en resaltar tu estilo personal.",
          },
          {
            icon: "heart",
            title: "Hecho con amor",
            description:
              "Cada bordado y tejido está hecho a mano con gran atención al detalle.",
          },
          {
            icon: "custom",
            title: "Personalización",
            description:
              "Ofrecemos la opción de personalizar tus piezas según tus necesidades.",
          },
        ].map((card, index) => (
          <article key={index} className="product-detail-card">
            <span className={`${card.icon} icon-card`}></span>
            <p className="product--card-title">{card.title}</p>
            <p className="product--card-body">{card.description}</p>
          </article>
        ))}
      </section>
    </section>
  );
};

export default ProductDetail;
