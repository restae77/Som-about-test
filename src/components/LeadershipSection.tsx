import './LeadershipSection.css';

const LeadershipSection: React.FC = () => {
    return (
        <section className="leadership-section">
            <h2>Our Leadership Team</h2>
            <div className="team">
                <div className="team-member">
                    <img src="/placeholder-leader1.jpg" alt="Pastor Sarah Johnson" />
                    <h3>Pastor Sarah Johnson</h3>
                    <p>Leading SOM's vision for innovative business and global impact</p>
                </div>
                <div className="team-member">
                    <img src="/placeholder-leader2.jpg" alt="Pastor Michael Chen" />
                    <h3>Pastor Michael Chen</h3>
                    <p>Spearheading academic excellence and research initiatives</p>
                </div>
                <div className="team-member">
                    <img src="/placeholder-leader3.jpg" alt="Pastor Emily Rodriguez" />
                    <h3>Pastor Emily Rodriguez</h3>
                    <p>Driving technological advancement and entrepreneurial growth</p>
                </div>
                <div className="team-member">
                    <img src="/placeholder-leader1.jpg" alt="Pastor David Lee" />
                    <h3>Pastor David Lee</h3>
                    <p>Overseeing community outreach and pastoral care programs</p>
                </div>
                <div className="team-member">
                    <img src="/placeholder-leader2.jpg" alt="Pastor Rachel Kim" />
                    <h3>Pastor Rachel Kim</h3>
                    <p>Managing youth development and mentorship initiatives</p>
                </div>
                <div className="team-member">
                    <img src="/placeholder-leader3.jpg" alt="Pastor James Patel" />
                    <h3>Pastor James Patel</h3>
                    <p>Leading efforts in global missionary work and support</p>
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;