import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//Layout
import HomeLayout from "./pages/HomeLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
//Pages
import Home from "./layout/Homelay";
import Account from "./pages/Account";
import PagenotFound from "./pages/PagenotFound";
import SoloProduct from "./pages/SoloProduct";
import SearchProduct from "./pages/SearchProduct";
import Cart from "./pages/Cart";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="product/:id" element={<SoloProduct />}></Route>
        <Route path="search/:idprod" element={<SearchProduct />} />
        <Route path="Cart" element={<Cart />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<PagenotFound />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
