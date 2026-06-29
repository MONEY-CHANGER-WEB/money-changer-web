import { useState } from "react";

export default function Contact() {
  const [formData,setFormData] = useState({name: "",email: "",number: "",message:""})
  const [status,setStatus] = useState({type: "",text: ""})
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', text: 'Sending your inquiry...' });

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', text: 'Inquiry sent successfully! Check your inbox soon.' });
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        setStatus({ type: 'error', text: `Error: ${data.error}` });
      }
    } catch (error) {
      setStatus({ type: 'error', text: 'Could not reach the backend email server.' });
    }
  };
  return (
    <div className="contact-page">
      <section className="contact-title">
        <h1>Get In Touch</h1>
        <p>Hubungi kami sekarang juga untuk mendapatkan nilai tukar terbaik!</p>
      </section>
      <section className="contact-container">
        <form onSubmit={handleSubmit} className="info-user">
          <div>
            <label for="name">Nama:</label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              autocomplete="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label for="email">Email:</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              autocomplete="email"
              placeholder="your.email@gmail.com"
              required
            />
          </div>
          <div>
            <label for="phone">Nomor Telepon:</label>
            <input
              onChange={handleChange}
              type="tel"
              id="phone"
              name="number"
              value={formData.number}
              autocomplete="tel"
              placeholder="08123456789"
            />
          </div>
          <div>
            <label for="message">Pesan:</label>
            <textarea
              onChange={handleChange}
              id="message"
              name="message"
              value={formData.message}
              rows="4"
              placeholder="Tell us how can we help you"
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
        {status.text && (
        <p style={{ 
          marginTop: '15px', 
          color: status.type === 'success' ? 'green' : status.type === 'error' ? 'red' : 'orange' 
        }}>
          {status.text}
        </p>
      )}

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
