import React from "react";
import "./MyOrders.css";


const orders = [
  {
    id: "123456",
    productName: "Roadster Women Black Solid Top",
    productImage: "/roadster/Tishirt.png",
    orderDate: "14 Apr 2025",
    status: "Delivered",
    size: "M",
    price: "₹699",
  },
  {
    id: "789012",
    productName: "H&M Men Slim Fit Jeans",
    productImage: "/roadster/Jeans.png",
    orderDate: "12 Apr 2025",
    status: "In Transit",
    size: "32",
    price: "₹1,999",
  },
];

const MyOrders = () => {
  return (
    <div className="orders-container">
      <h2>My Orders</h2>
      {orders.map((order) => (
        <div className="order-card" key={order.id}>
          <img src={order.productImage} alt={order.productName} className="product-img" />
          <div className="order-details">
            <h4>{order.productName}</h4>
            <p>Size: {order.size}</p>
            <p>Price: {order.price}</p>
            <p>Ordered on: {order.orderDate}</p>
            <p className={`status ${order.status.toLowerCase()}`}>Status: {order.status}</p>
            <div className="order-actions">
              {order.status === "Delivered" && <button>Rate Product</button>}
              <button>Track</button>
              <button>Buy Again</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
