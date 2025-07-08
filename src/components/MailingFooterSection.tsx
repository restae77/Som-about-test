import './MailingFooterSection.css';

const MailingFooterSection: React.FC = () => {
    return (
        <section className="mailing-footer-section">
            <div className="mailing-form">
                <h2>Join Our Mailing List</h2>
                <p>Join our mailing list to be the first to know about our services, special programs, testimonies, and ways to grow in faith together.</p>
                <form>
                    <input type="email" placeholder="Enter email" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="footer-content">
                <div className="footer-column about-us">
                    <h3>About Us</h3>
                    <p>The place where you discover your purpose, passion, and power to live out the God-life.</p>
                </div>
                <div className="footer-column quicklinks">
                    <h3>Quicklinks</h3>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Live Events</a></li>
                        <li><a href="#">Preachers Kids Network</a></li>
                    </ul>
                </div>
                <div className="footer-column contact-us">
                    <h3>Contact Us</h3>
                    <p>+234 800 000 0000</p>
                    <p><a href="mailto:som@loveworldsom.org">som@loveworldsom.org</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <img src="/logo.png" alt="SOM Logo" className="logo" /> {/* Replace text with logo image */}
                <p>© 2025 LoveWorld Son of Ministry. All Rights Reserved</p>
                <div className="social-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/face.jpg" alt="Facebook" className="social-icon" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/twitter.jpg" alt="Twitter" className="social-icon" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/face.jpg" alt="Instagram" className="social-icon" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/twitter.jpg" alt="LinkedIn" className="social-icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MailingFooterSection;