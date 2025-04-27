import React from "react";
import "./AddressBook.css";

const addresses = [
  {
    id: 1,
    name: "Vaishnavi Kale",
    phone: "9876543210",
    addressLine: "Flat 304, Maple Heights, Wakad",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411057",
    type: "Home",
  },
  {
    id: 2,
    name: "Vaishnavi Kale",
    phone: "9123456789",
    addressLine: "Tech Park, Hinjewadi Phase 2",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411057",
    type: "Work",
  },
];

const AddressBook = () => {
  return (
    <div className="address-container">
      <h2>My Address Book</h2>
      {addresses.map((addr) => (
        <div className="address-card" key={addr.id}>
          <div className="address-header">
            <span className="addr-type">{addr.type}</span>
            <button className="edit-btn">Edit</button>
          </div>
          <p className="addr-name">{addr.name} | {addr.phone}</p>
          <p>{addr.addressLine}</p>
          <p>
            {addr.city}, {addr.state} - {addr.pincode}
          </p>
          <div className="address-actions">
            <button className="remove-btn">Remove</button>
            <button className="default-btn">Set as Default</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressBook;
