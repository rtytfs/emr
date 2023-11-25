// PrescriptionComponent.js
import React from 'react';

const PrescriptionComponent = ({ prescriptions }) => (
  <div>
    <h2>Prescriptions</h2>
    <ul>
      {prescriptions.map(prescription => (
        <li key={prescription.id}>
          <div>
            <strong>Medication:</strong> {prescription.medication}
          </div>
          {/* Display other prescription details */}
        </li>
      ))}
    </ul>
  </div>
);

export default PrescriptionComponent;
