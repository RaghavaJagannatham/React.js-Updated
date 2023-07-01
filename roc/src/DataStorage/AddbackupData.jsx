import React, { useState } from 'react';

const FormComponent = ({ onSave }) => {
  const [formData, setFormData] = useState({
    checkbox: false,
    title: '',
    vrid: '',
    shipperAccount: '',
    createdDate: '',
    createdBy: '',
    timer: 0,
  });

  const handleInputChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      checkbox: false,
      title: '',
      vrid: '',
      shipperAccount: '',
      createdDate: '',
      createdBy: '',
      timer: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Checkbox:
        <input
          type="checkbox"
          name="checkbox"
          checked={formData.checkbox}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Vrid:
        <input
          type="text"
          name="vrid"
          value={formData.vrid}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Shipper Account:
        <input
          type="text"
          name="shipperAccount"
          value={formData.shipperAccount}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Created Date:
        <input
          type="text"
          name="createdDate"
          value={formData.createdDate}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Created By:
        <input
          type="text"
          name="createdBy"
          value={formData.createdBy}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default FormComponent;
