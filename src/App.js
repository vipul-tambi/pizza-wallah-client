import "./App.css";
import TopBar from "./components/TopBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import UserList from "./components/Admin/UserList";
import PizzasList from "./components/Admin/PizzasList";
import AddNewPizza from "./components/Admin/AddNewPizza";
import OrderList from "./components/Admin/OrderList";
import EditPizza from "./components/Admin/EditPizza";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        {" "}
        <Route path="/admin/userlist" element={<UserList />} exact />
        <Route path="/admin/editpizza/:pizzaId" element={<EditPizza />} exact />
        <Route path="/admin/pizzalist" element={<PizzasList />} exact />
        <Route path="/admin/addnewpizza" element={<AddNewPizza />} exact />
        <Route path="/admin/orderlist" element={<OrderList />} exact />
        <Route path="/admin/userlist" element={<UserList />} exact />
        <Route path="/admin/*" element={<AdminScreen />} />
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/policy" element={<Policy />} />
        <Route exact path="/cart" element={<CartScreen />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/order" element={<OrderScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
