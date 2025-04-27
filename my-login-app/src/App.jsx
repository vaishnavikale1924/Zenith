import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./index.css";
import MyOrders from './components/MyOrders';
import PaymentMethods from "./components/PaymentMethods";
import AddressBook from "./components/AddressBook";
import SignUp from "./components/Signup";

function App() {
  // Change the component here to switch views
  return (
    <>
      {/* <Login /> */}
      {/* <Profile /> */}
      <MyOrders/>
      {/* <PaymentMethods/> */}
      {/* <AddressBook/> */}
      {/* <SignUp/> */}
    </>
  );
}

export default App;
