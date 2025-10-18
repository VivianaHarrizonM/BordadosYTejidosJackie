import './footer.css';

const Footer = () => {
return (
    <footer>
      <section className="footer-left">
        <h4>Contacto</h4>
        <ul>
          <li>
            <a
              href="https://wa.me/5214271416322"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <img src="/assets/icons/smartphone.png" alt="WhatsApp" />
              427 141 6322
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/bordadosytejidosjackie?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <img src="/assets/icons/facebook.png" alt="Facebook" />
              Facebook
            </a>
          </li>
        </ul>
      </section>

      <section className="footer-right">
        <img
          className="footer-logo"
          src="/assets/icons/logo2.png"
          alt="Logo de Bordados Jackie"
        />
      </section>
    </footer>
  );
};


export default Footer;
