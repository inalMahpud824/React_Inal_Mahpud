import imageHero from "../assets/hero-img.png";
import { Navbar } from "../components/Navbar";
import '../styles/LandingPage.css';
function LandingPage() {
  return (
    <>
    <Navbar />

      <main id="home">
        <div>
          <h1>Better Solutions For Your Business</h1>
          <p>
            We are team of talented designers making websites with Bootstrap
          </p>
          <button>Get Started</button>
          <button className="video">Watch Video</button>
        </div>
        <img src={imageHero} alt="hero-img" />
      </main>

      <footer id="contact">
        <div className="footer-container">
          <div className="footer-column">
            <h3 className="arsha">ARSHA</h3>
            <p>
              A108 Adam Street
              <br />
              New York, NY 535022
              <br />
              United States
            </p>
            <p>
              <strong>Phone:</strong> +1 5589 55488 55
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
          </div>
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Our Social Networks</h3>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="social-icons">
              <span className="icon"></span>
              <span className="icon"></span>
              <span className="icon"></span>
              <span className="icon"></span>
              <span className="icon"></span>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <p>
            © Copyright <strong>Inal</strong> All Rights Reserved
          </p>
          <p>
            Designed by <span>Inal Mahpud</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
