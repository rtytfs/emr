// LabResultsComponent.js
import React from 'react';

const LabResultsComponent = ({ results }) => (
  <div>
    <h2>Lab Results</h2>
    <ul>
      {results.map(result => (
        <li key={result.id}>
          <div>
            <strong>Test:</strong> {result.test}
          </div>
          {/* Display other result details */}
        </li>
      ))}
    </ul>
  </div>
);

export default LabResultsComponent;
