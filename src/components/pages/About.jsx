import ptglobalImg from "../../assets/pt-global.png";

export default function About() {
  return (
    <section className="about-page">
      <section className="about-container1">
        <img
        className="about-img"
          src={ptglobalImg}
          alt="pt-global"
        />
        <div className="box-img"></div>
      </section>

      <section className="about-container2">
        <div className="subtitle">
          <p>About Us</p>
        </div>
        <p className="about-content">GLOBAL MONEY CHANGER hadir untuk memenuhi semua kebutuhan penukaran mata uang asing Anda. Dengan nilai tukar yang kompetitif dan proses transaksi yang cepat serta aman, kami siap memberikan layanan terbaik untuk bisnis, traveling, dan investasi Anda. Kami percaya bahwa kepercayaan adalah kunci dalam setiap transaksi yang kami lakukan.</p>
        <div className="sub-about">
        </div>
      </section>
    </section>
  );
}
