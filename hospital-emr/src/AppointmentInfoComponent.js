// AppointmentInfoComponent.js
import React from 'react';

const AppointmentInfoComponent = ({ appointments }) => (
  <div>
    <h2>Appointment Information</h2>
    <ul>
      {appointments.map(appointment => (
        <li key={appointment.id}>
          <div>
            <strong>Date:</strong> {appointment.date}
          </div>
          {/* Display other appointment details */}
        </li>
      ))}
    </ul>
  </div>
);

export default AppointmentInfoComponent;
