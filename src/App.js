import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginRegister from "./Pages/LoginRegister";
import Footer from "./Components/Footer/Footer";

import banner_men from "../../frontend/src/Components/Assets/banner_mens.png";
import banner_women from "../../frontend/src/Components/Assets/banner_women.png";
import banner_kids from "../../frontend/src/Components/Assets/banner_kids.png";
import CartItems from "./Components/CartItems/CartItems";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={banner_men} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={banner_women} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={banner_kids} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productID" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginRegister />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
