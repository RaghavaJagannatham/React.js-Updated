import React, { useState } from 'react';

const Addbackup = ({ onSave }) => {
  const [vrid, setVrid] = useState('');
  const [shipperAccount, setShipperAccount] = useState('');
  const [eta, setEta] = useState('');
  const [alternateVrid, setAlternateVrid] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const backupData = {
      vrid,
      shipperAccount,
      eta,
      alternateVrid,
      notes,
    };
    onSave(backupData);
    setVrid('');
    setShipperAccount('');
    setEta('');
    setAlternateVrid('');
    setNotes('');
  };

  return (
    <div>
      <h2>Add Backup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          VRID:
          <input type="text" value={vrid} onChange={(e) => setVrid(e.target.value)} />
        </label>
        <br />
        <label>
          Shipper Account:
          <input
            type="text"
            value={shipperAccount}
            onChange={(e) => setShipperAccount(e.target.value)}
          />
        </label>
        <br />
        <label>
          ETA:
          <input type="text" value={eta} onChange={(e) => setEta(e.target.value)} />
        </label>
        <br />
        <label>
          Alternate VRID:
          <input
            type="text"
            value={alternateVrid}
            onChange={(e) => setAlternateVrid(e.target.value)}
          />
        </label>
        <br />
        <label>
          Notes:
          <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Addbackup;
