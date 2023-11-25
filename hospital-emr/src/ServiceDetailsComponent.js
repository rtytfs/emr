// ServiceDetailsComponent.js
import React from 'react';

const ServiceDetailsComponent = ({ details }) => (
  <div>
    <h2>Service Details</h2>
    <ul>
      {details.map(detail => (
        <li key={detail.id}>
          <div>
            <strong>Service:</strong> {detail.service}
          </div>
          {/* Display other service details */}
        </li>
      ))}
    </ul>
  </div>
);

export default ServiceDetailsComponent;
