import React, { useState, useEffect } from 'react';

const FormComponent = ({ onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    vrid: '',
    shipperAccount: '',
    createdDate: '',
    createdBy: '',
  });
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleTimerStart = () => {
    setTimerRunning(true);
  };

  const handleTimerStop = () => {
    setTimerRunning(false);
  };

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, timer });
    setFormData({
      title: '',
      vrid: '',
      shipperAccount: '',
      createdDate: '',
      createdBy: '',
    });
    setTimer(0);
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
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
          VRID:
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
          Date Created:
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
        <div>
          <p>Stopwatch: {timer} seconds</p>
          {!timerRunning ? (
            <button type="button" onClick={handleTimerStart}>
              Start
            </button>
          ) : (
            <button type="button" onClick={handleTimerStop}>
              Stop
            </button>
          )}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default FormComponent;
