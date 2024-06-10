import PageHeader from '../../components/PageHeader/PageHeader';
import Banner from '../../components/Banner/Banner';
import CategoryDropdown from '../../components/Category/CategoryDropdown';
import './Starting.scss';  

const StartingPage = () => (
  <div className="starting">
    <PageHeader />
    <Banner />
    <CategoryDropdown />
  </div>
);

export default StartingPage;
