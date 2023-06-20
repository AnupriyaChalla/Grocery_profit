import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState();
  const [itemCostPrice, setItemCostPrice] = useState();
  const [itemSellingPrice, setItemSellingPrice] = useState();
  const [totalProfit, setTotalProfit] = useState(0);
  

  const addItem = () => {
    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      costPrice: itemCostPrice,
      sellingPrice: itemSellingPrice,
      profit: (itemSellingPrice - itemCostPrice) * itemQuantity,
      
      unit: getUnitFromName(itemName)
    };

    setItems([...items, newItem]);
    setTotalProfit(totalProfit + newItem.profit);
    

    // Reset input fields
    setItemName("");
    setItemQuantity(0);
    setItemCostPrice(0);
    setItemSellingPrice(0);
  };

  const getUnitFromName = (name) => {
    if (name.toLowerCase().includes("1/2 kg")) {
      return "1/2 kg";
    } else if (name.toLowerCase().includes("1/4 kg")) {
      return "1/4 kg";
    } else if (name.toLowerCase().includes("kg")) {
      return "kg";
    } else {
      return "";
    }
  };

  return (
    <div className="container">
      <h1>Grocery Store Profit/Loss Calculator</h1>
      <div className="input-group">
        <label>
          Item Name:{" "}<br />
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <label>
          Quantity:{" "}<br />
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Cost Price:{" "}<br />
          <input
            type="number"
            value={itemCostPrice}
            onChange={(e) => setItemCostPrice(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Selling Price:{" "}<br />
          <input
            type="number"
            value={itemSellingPrice}
            onChange={(e) => setItemSellingPrice(parseFloat(e.target.value))}
          />
        </label>
        <button onClick={addItem}>Add Item</button>
      </div>
      <div className="table-container">
        <h2>Items Sold Today:</h2>
        {items.length === 0 ? (
          <p>No items sold yet.</p>
        ) : (
          <table className="items-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Cost Price</th>
                <th>Selling Price</th>
                <th>Profit</th>
                
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.costPrice}</td>
                  <td>{item.sellingPrice}</td>
                  <td>{item.profit}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="total-profit-loss">
          <p>Total Day Profit: {totalProfit}</p>
        
        </div>
      </div>
    </div>
  );
};

export default App;
