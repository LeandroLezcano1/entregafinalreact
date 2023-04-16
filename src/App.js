import { Navbar } from "./components";
import { HomePage, CartPage, ProductDetailPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<HomePage />} />
          <Route path="/item/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
