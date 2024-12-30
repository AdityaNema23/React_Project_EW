import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import Kids from "./Components/Kids";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Cart from "./Components/Cart";
import ErrorPage from "./Components/ErrorPage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductCard />} />
          <Route path="kids" element={<Kids />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
