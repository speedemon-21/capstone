// StartingPage.jsx
import PageHeader from '../../components/PageHeader/PageHeader';
import Banner from '../../components/Banner/Banner';
import CategoryDropdown from '../../components/Category/CategoryDropdown';
import './Starting.scss';
import Footer from '../../components/Footer/Footer';

const StartingPage = () => (
  <div className="starting-page">
    <PageHeader />
    <Banner />
    <CategoryDropdown />
    <Footer />
  </div>
);

export default StartingPage;
