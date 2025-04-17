import React from "react";
import "./Profile.css";

const ProfilePage = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="profile">
          <img
            src="PROFILE.jpeg"
            alt="Profile"
            className="profile-pic"
          />
          <h2>Vaishnavi Kale</h2>
          <p className="email">vaishnavi@example.com</p>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#">My Orders</a></li>
            <li><a href="#">Personal Info</a></li>
            <li><a href="#">Address Book</a></li>
            <li><a href="#">Payment Methods</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </nav>
      </div>

      <div className="content">
        <div className="profile-info">
          <h3>Personal Information</h3>
          <form>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" value="Vaishnavi Kale" readOnly />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value="vaishnavi@example.com" readOnly />

            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" value="+91 1234567890" readOnly />

            <label htmlFor="address">Address:</label>
            <textarea id="address" rows="4" readOnly>1234, Street Name, City</textarea>

            <button type="submit">Save Changes</button>
          </form>
        </div>

        <div className="order-history">
          <h3>Order History</h3>
          <div className="order">
            <p><strong>Order #1234</strong></p>
            <p>Date: 10th April 2025</p>
            <p>Status: Delivered</p>
          </div>
          <div className="order">
            <p><strong>Order #1235</strong></p>
            <p>Date: 5th April 2025</p>
            <p>Status: In Transit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
