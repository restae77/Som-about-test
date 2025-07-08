import './ActivitiesSection.css';

const ActivitiesSection: React.FC = () => {
    return (
        <section className="activities-section">
            <h2>SOM Activities</h2>
            <div className="gallery">
                <img src="/placeholder1.png" alt="Activity 1" />
                <img src="/placeholder2.png" alt="Activity 2" />
                <img src="/placeholder3.png" alt="Activity 3" />
                <img src="/placeholder1.png" alt="Activity 4" />
                <img src="/placeholder2.png" alt="Activity 5" />
                <img src="/placeholder3.png" alt="Activity 6" />
                <img src="/placeholder1.png" alt="Activity 7" />
                <img src="/placeholder2.png" alt="Activity 8" />
                <img src="/placeholder3.png" alt="Activity 9" />
            </div>
        </section>
    );
};

export default ActivitiesSection;