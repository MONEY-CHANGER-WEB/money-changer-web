export default function Home() {
  return (
    <main className="home-page">
      <section className="home-container1">
        <div className="trusted">
          <h2>Trusted Since 200..</h2>
        </div>
        <h1>
          Global <span className="highlight">Money Changer</span>
        </h1>
        <p>
          Kami hadir untuk anda dengan layanan penukaran mata uang asing
          terpercaya. Dapatkan nilai tukar kompetitif untuk berbagai mata uang
          utama, proses cepat dan transaksi yang aman. Baik untuk bisnis,
          traveling, atau investasi, kami siap melayani anda.
        </p>
        <div className="social">
            <button onClick={() => window.location.href = "https://icons8.com/icons/set/whatsapp"}></button>
            <button></button>
        </div>
      </section>

      <section className="home-container2">
        <div className="home-img">
          <img
            src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg"
            alt=""
          />
        </div>
        <div className="box-img"></div>
      </section>
    </main>
  );
}
