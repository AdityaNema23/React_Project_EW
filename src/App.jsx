// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import ProductCard from "./Components/ProductCard";
// import Jewelery from "./Components/Jewelery";
// import Men from "./Components/Men";
// import Women from "./Components/Women";
// import Cart from "./Components/Cart";
// import ErrorPage from "./Components/ErrorPage";
// import { Outlet } from "react-router-dom";
// import ProductDetails from "./Components/ProductDetails";
// import { CartProvider } from "./Components/CartContext";

// function App() {
//   return (

//     <CartProvider>

//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<ProductCard />} />
//             <Route path="/Jewelery" element={<Jewelery />} />
//             <Route path="/men" element={<Men />} />
//             <Route path="/women" element={<Women />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="products/:productId" element={<ProductDetails />} />
//           </Route>
//           <Route path="*" element={<ErrorPage />} />
//         </Routes>
//       </BrowserRouter>

//     </CartProvider>
//   );
// }

// const Layout = () => {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <Outlet />
//       </main>
//     </>
//   );
// };

// export default App;




import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import Jewelery from "./Components/Jewelery";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Cart from "./Components/Cart";
import ErrorPage from "./Components/ErrorPage";
import { Outlet } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import { CartProvider } from "./Components/CartContext";

function App() {
  return (
    <CartProvider>
      {/* Use HashRouter for GitHub Pages */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductCard />} />
            <Route path="Jewelery" element={<Jewelery />} />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products/:productId" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
    </CartProvider>
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
