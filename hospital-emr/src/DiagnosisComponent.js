// DiagnosisComponent.js
import React from 'react';

const DiagnosisComponent = ({ diagnosis }) => (
  <div>
    <h2>Diagnosis</h2>
    <div>
      <strong>Doctor:</strong> {diagnosis.doctor}
    </div>
    <div>
      <strong>Result:</strong> {diagnosis.result}
    </div>
    {/* Add more diagnosis information */}
  </div>
);

export default DiagnosisComponent;
