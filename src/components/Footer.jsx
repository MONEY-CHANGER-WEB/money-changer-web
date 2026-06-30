export default function Footer() {
  return (
    <>
      <div className="Container-Footer">
        <div className="Main-Footer">
          <div className="footer-pt">
            <h2>PT Global Lintas Artha</h2>
            <p>
              Your trusted partner in navigating global financial markets. We
              provide professional brokerage services with integrity and
              excellence.
            </p>
          </div>
          <div className="footer-quick">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0695403195487!2d106.7973438741822!3d-6.254568893733934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f18540c4c7d5%3A0xbbe4acc3e606ec0b!2sPT.GLOBAL%20SARANA%20LINTAS%20ARTHA.!5e0!3m2!1sid!2sid!4v1782800508885!5m2!1sid!2sid"
              width="600"
              height="450"
              style={{border: 0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
        <div className="below-Footer">
          <p>© 2026 PT Global Lintas Artha. All rights reserved.</p>
          <p>Licensed and regulated by OJK (Otoritas Jasa Keuangan)</p>
        </div>
      </div>
    </>
  );
}
