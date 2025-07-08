import './MailingSection.css';

const MailingSection: React.FC = () => {
    return (
        <section className="mailing-section">
            <h2>Join Our Mailing List</h2>
            <p>Be the first to know about upcoming events, special programs, and more!</p>
            <form>
                <input type="email" placeholder="Enter email" required />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default MailingSection;