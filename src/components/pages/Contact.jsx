export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-title">
        <h1>Get In Touch</h1>
        <p>Hubungi kami sekarang juga untuk mendapatkan nilai tukar terbaik!</p>
      </section>
      <section className="contact-container">
        <form className="info-user">
          <div>
            <label for="name">Nama:</label>
            <input
              type="text"
              id="name"
              name="name"
              autocomplete="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autocomplete="email"
              placeholder="your.email@gmail.com"
              required
            />
          </div>
          <div>
            <label for="phone">Nomor Telepon:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autocomplete="tel"
              placeholder="08123456789"
            />
          </div>
          <div>
            <label for="message">Pesan:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us how can we help you"
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>

        <section className="info-global">
          <ul>
            <li>
              <div className="box-img">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency-systems-regular/48/8e6a00/new-post.png"
                  alt="new-post"
                />
              </div>
              <h1>
                Email<span>susi@globalmoneychanger.com</span>
                <span>global_sla@yahoo.com</span>
              </h1>
            </li>
            <li>
              <div className="box-img">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency-systems-regular/48/8e6a00/phone.png"
                  alt="phone"
                />
              </div>
              <h1>
                Phone<span>021-72787588</span>
                <span>081290912664</span>
              </h1>
            </li>
            <li>
              <div className="box-img">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/windows/32/8e6a00/marker.png"
                  alt="marker"
                />
              </div>
              <h1>
                Address
                <span>Wijaya Grand Center D-3, Jl. Wijaya II</span>
                <span>Kebayoran Baru, Jakarta Selatan, 12160 Jakarta</span>
              </h1>
            </li>
            <li>
              <div className="box-img">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/windows/32/8e6a00/clock--v3.png"
                  alt="clock--v3"
                />
              </div>
              <h1>
                Bussiness Hours
                <span>Monday - Friday: 8:45 AM - 5:00 PM</span>
                <span>Saturday - Sunday: Closed</span>
              </h1>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}
