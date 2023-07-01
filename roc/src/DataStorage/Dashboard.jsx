import React, { useState, useEffect } from 'react';
import FormComponent from './AddbackupData';

const DashboardPage = () => {
  const [data, setData] = useState([]);

  const handleSave = (formData) => {
    const newData = {
      ...formData,
      id: Date.now(),
    };
    setData((prevData) => [...prevData, newData]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => {
          if (item.timer > 0) {
            return {
              ...item,
              timer: item.timer - 1,
            };
          }
          return item;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>Title</th>
            <th>Vrid</th>
            <th>Shipper Account</th>
            <th>Created Date</th>
            <th>Created By</th>
            <th>Timer</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className={item.timer === 0 ? 'expired' : ''}>
              <td>{item.checkbox ? 'Yes' : 'No'}</td>
              <td>{item.title}</td>
              <td>{item.vrid}</td>
              <td>{item.shipperAccount}</td>
              <td>{item.createdDate}</td>
              <td>{item.createdBy}</td>
              <td>{item.timer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <FormComponent onSave={handleSave} />
    </div>
  );
};

export default DashboardPage;
