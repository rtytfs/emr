// MedicalRecordComponent.js
import React from 'react';

const MedicalRecordComponent = ({ records }) => (
  <div>
    <h2>Medical Records</h2>
    <ul>
      {records.map(record => (
        <li key={record.id}>
          <div>
            <strong>Date:</strong> {record.date}
          </div>
          {/* Display other record details */}
        </li>
      ))}
    </ul>
  </div>
);

export default MedicalRecordComponent;
