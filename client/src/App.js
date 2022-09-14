import { Routes, Route, useNavigate } from "react-router-dom";
import Farmer from "./Components/farmer/Farmer";
import Home from "./Components/home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import { useEffect, createContext, useReducer } from "react";
import { reducer, initialState } from "./Reducers/UserReducer";
import Admin from "./Components/Admin/Admin";
import UserList from "./Components/Admin/src/Pages/UserList";
import Product from "./Components/Pages/Product";
import {ProductList} from "./Components/Pages/ProductList";
import Cart from "./Cart/Cart";
import AddProducts from "./Components/farmer/AddProducts";
import Basket from "./Components/Basket";

export const UserContext = createContext();
const App = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home/>} />
          <Route path="farmer" element={<Farmer />} />
        </Route>
        <Route path="admin" element={<Admin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="users" element={<UserList/>}/>
        <Route path='productlist/product' element={<Product/>}/>
        <Route path="productlist" element={<ProductList/>}/>
        <Route path="productlist/cart" element={<Cart/>}/>
        <Route path="productlist" element={<ProductList/>}/>
        <Route path="farmer/addproducts" element={<AddProducts/>}/>
        
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
