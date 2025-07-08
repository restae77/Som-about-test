import './VideoSection.css';

const VideoSection: React.FC = () => {
    return (
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
    );
};

export default VideoSection;