// PatientInfoComponent.js
import React from 'react';

const PatientInfoComponent = ({ name, gender, age, contactInfo }) => (
  <div>
    <h2>Patient Information</h2>
    <div>
      <strong>Name:</strong> {name}
    </div>
    <div>
      <strong>Gender:</strong> {gender}
    </div>
    <div>
      <strong>Age:</strong> {age}
    </div>
    <div>
      <strong>Contact Information:</strong> {contactInfo}
    </div>
    {/* Add more information fields */}
  </div>
);

export default PatientInfoComponent;
