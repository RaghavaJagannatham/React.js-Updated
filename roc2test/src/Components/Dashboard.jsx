import React, { useState } from 'react';
import FormComponent from './Data';
import './table.css'

const DashboardPage = () => {
  const [data, setData] = useState([]);

  const handleSave = (formData) => {
    const newData = {
      ...formData,
      id: Date.now(),
    };
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>VRID</th>
              <th>Shipper Account</th>
              <th>Date Created</th>
              <th>Created By</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.vrid}</td>
                <td>{item.shipperAccount}</td>
                <td>{item.createdDate}</td>
                <td>{item.createdBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FormComponent onSave={handleSave} /> {/* Pass onSave prop with the handleSave function */}
    </div>
  );
};

export default DashboardPage;
