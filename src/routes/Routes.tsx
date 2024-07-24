import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Deals from "../pages/Deals";
import CustomerService from "../pages/CustomerService";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/amazon-clone" element={<Home />} />
      <Route path="/amazon-clone/cart" element={<Cart />} />
      <Route path="/amazon-clone/todays-deals" element={<Deals />} />
      <Route
        path="/amazon-clone/customer-service"
        element={<CustomerService />}
      />
      <Route path="/amazon-clone/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
