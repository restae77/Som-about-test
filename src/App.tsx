import Header from './components/Header';
import AboutSection from './components/AboutSection';
import VideoSection from './components/VideoSection';
import ActivitiesSection from './components/ActivitiesSection';
import LeadershipSection from './components/LeadershipSection';
import AppSection from './components/AppSection';
import MailingFooterSection from './components/MailingFooterSection'; // New import

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <AboutSection />
            <VideoSection />
            <ActivitiesSection />
            <LeadershipSection />
            <AppSection />
            <MailingFooterSection /> {/* Replace MailingSection and Footer */}
        </div>
    );
};

export default App;