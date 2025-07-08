// src/AboutPage.tsx
import './styles.css'; // Reuse your existing styles

const AboutPage = () => {
  return (
    <>
      {/* Header */}
      <header>
        <img src="/logo.png" alt="SOM Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Preachers Kids' Network</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Live Events</a></li>
          </ul>
        </nav>
        <a href="#contact" className="cta-button">Contact</a>
      </header>

      {/* About Us */}
      <section id="about" className="about-section">
        <h1>About Us</h1>
        <p>Explore our vision, mission, and leadership</p>
      </section>

      {/* Video */}
      <section className="video-section">
        <div className="video-container">
          <video controls>
            <source src="/webvid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay-text">
            <h2>Experience SOM</h2>
            <p>Watch a brief introduction of what the LoveWorld Son of Ministry is about</p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="activities-section">
        <h2>SOM Activities</h2>
        <div className="gallery">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <img key={i} src={`/placeholder${i}.jpg`} alt={`Activity ${i}`} />
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="leadership-section">
        <h2>Our Leadership Team</h2>
        <div className="team">
          {[
            { name: 'Pastor Sarah Johnson', img: 'placeholder-leader1.jpg', desc: 'Leading SOM\'s vision for innovative business and global impact' },
            { name: 'Pastor Michael Chen', img: 'placeholder-leader2.jpg', desc: 'Spearheading academic excellence and research initiatives' },
            { name: 'Pastor Emily Rodriguez', img: 'placeholder-leader3.jpg', desc: 'Driving technological advancement and entrepreneurial growth' }
          ].map((leader, i) => (
            <div className="team-member" key={i}>
              <img src={`/${leader.img}`} alt={leader.name} />
              <h3>{leader.name}</h3>
              <p>{leader.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Section */}
      <section className="app-section">
        <div className="ellipse-pair top-left">
          <div className="ellipse inner"></div>
          <div className="ellipse outer"></div>
        </div>
        <div className="ellipse-pair bottom-right">
          <div className="ellipse inner"></div>
          <div className="ellipse outer"></div>
        </div>
        <div className="app-content">
          <h2>Get the SOM Mobile App</h2>
          <p>Stay connected, access resources, and never miss an update</p>
          <div className="app-buttons">
            <a href="#" className="app-store">
              <img src="/appstore.png" alt="App Store Icon" className="store-icon" />
              App Store
            </a>
            <a href="#" className="play-store">
              <img src="/playstore.png" alt="Play Store Icon" className="store-icon" />
              Play Store
            </a>
          </div>
        </div>
        <img src="/phone.png" alt="Phone with SOM App" className="phone-img" />
      </section>

      {/* Mailing List */}
      <section className="mailing-section">
        <h2>Join Our Mailing List</h2>
        <p>Be the first to know about upcoming events, special programs, and more!</p>
        <form>
          <input type="email" placeholder="Enter email" required />
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Discover SOM and the place where young people discover the power to live out the faith</p>
          </div>
          <div className="footer-section">
            <h3>Quicklinks</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Live Events</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: som@loveworldsom.org</p>
            <p>Phone: +234 800 000 0000</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="logo">SOM</div>
          <p>© 2020 LOVEWORLDSONOFMINISTRY. ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </>
  );
};

export default AboutPage;
