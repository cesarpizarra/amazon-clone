import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/amazon-clone" element={<Home />} />
      <Route path="/amazon-clone/cart" element={<Cart />} />
      <Route path="/amazon-clone/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
