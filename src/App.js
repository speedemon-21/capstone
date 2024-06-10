import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import InventoryPage from "./pages/Inventory/Inventory";
// import WarehousePage from "./pages/Warehouse/Warehouse";
// import EditItemPage from "./pages/EditItem/EditItem";
// import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
// import InventoryDetailsCard from "../src/components/ItemDetailsCard/ItemDetailsCard";
// import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";
// //import "./App.scss";
// import Navigation from "./components/Navigation/Navigation";
// import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
// import Footer from "./components/Footer/Footer";
// import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import StartingPage from "./pages/Starting/Starting";
import Login from './components/Login/Login';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);


export default App;
