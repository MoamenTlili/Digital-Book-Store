import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/orders')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Orders</h2>
      {orders.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Address</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id}>
                  <td className="py-2 px-4 border-b">{order._id}</td>
                  <td className="py-2 px-4 border-b">{order.name}</td>
                  <td className="py-2 px-4 border-b">{order.address}</td>
                  <td className="py-2 px-4 border-b">{order.quantity}</td>
                  <td className="py-2 px-4 border-b">{order.mobileNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No orders available</p>
      )}
    </div>
  );
}

export default Orders;