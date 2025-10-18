
import ProductDetail from "../products/ProductDetail";
import Plans from "../plans/Plans";
import './main.css';

const Main = () => {
  return (
    <main>
      <section className="main-exchange-container">
        <div className="background-img"></div>
        <div className="main-exchange-container-title">
          <h2>Diseños con amor y dedicación</h2>
          <p>
            Explora nuestras colecciones que fusionan tradición y modernidad en cada
            puntada.
          </p>
        </div>
        <section className="main-tables-container">
          <div className="main-currency-table">
            <p className="currency-table-title">Colecciones Destacadas</p>
            <div className="currency-table-container">
              <table>
                <tbody>
                  <tr>
                    <td className="table__top-left">Vestidos tejidos</td>
                    <td className="table__top-right table__right">$ 520.00</td>
                  </tr>
                  <tr>
                    <td>Blusas bordadas</td>
                    <td className="table__right">$ 280.00</td>
                  </tr>
                  <tr>
                    <td>Accesorios personalizados</td>
                    <td className="table__right">$ 35.00</td>
                  </tr>
                  <tr>
                    <td className="table__bottom-left">Mantas decorativas</td>
                    <td className="table__bottom-right table__right">$ 250.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
      <ProductDetail />
      <Plans />
    </main>
  );
};

export default Main;
