import './AppSection.css';

const AppSection: React.FC = () => {
    return (
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
                <p>Stay connected with us, access resources, and never miss important updates.</p>
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
    );
};

export default AppSection;