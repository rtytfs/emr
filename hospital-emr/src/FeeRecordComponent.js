// FeeRecordComponent.js
import React from 'react';

const FeeRecordComponent = ({ fees }) => (
  <div>
    <h2>Fee Records</h2>
    <ul>
      {fees.map(fee => (
        <li key={fee.id}>
          <div>
            <strong>Date:</strong> {fee.date}
          </div>
          <div>
            <strong>Amount:</strong> {fee.amount}
          </div>
          {/* Display other fee details */}
        </li>
      ))}
    </ul>
  </div>
);

export default FeeRecordComponent;
