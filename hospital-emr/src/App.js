import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PatientInfoComponent from './PatientInfoComponent';
import MedicalRecordComponent from './MedicalRecordComponent';
import PrescriptionComponent from './PrescriptionComponent';
import DiagnosisComponent from './DiagnosisComponent';
import LabResultsComponent from './LabResultsComponent';
import AppointmentInfoComponent from './AppointmentInfoComponent';
import ServiceDetailsComponent from './ServiceDetailsComponent';
import FeeRecordComponent from './FeeRecordComponent';

const App = () => {
  const [patientData, setPatientData] = useState({});
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [diagnosis, setDiagnosis] = useState({});
  const [labResults, setLabResults] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [serviceDetails, setServiceDetails] = useState([]);
  const [feeRecords, setFeeRecords] = useState([]);

  useEffect(() => {
    // Fetch patient data
    axios.get('http://your-backend-api/patientData')
      .then(response => setPatientData(response.data))
      .catch(error => console.error('Error fetching patient data:', error));

    // Fetch medical records
    axios.get('http://your-backend-api/medicalRecords')
      .then(response => setMedicalRecords(response.data))
      .catch(error => console.error('Error fetching medical records:', error));

    // Fetch prescriptions
    axios.get('http://your-backend-api/prescriptions')
      .then(response => setPrescriptions(response.data))
      .catch(error => console.error('Error fetching prescriptions:', error));

    // Fetch diagnosis
    axios.get('http://your-backend-api/diagnosis')
      .then(response => setDiagnosis(response.data))
      .catch(error => console.error('Error fetching diagnosis:', error));

    // Fetch lab results
    axios.get('http://your-backend-api/labResults')
      .then(response => setLabResults(response.data))
      .catch(error => console.error('Error fetching lab results:', error));

    // Fetch appointments
    axios.get('http://your-backend-api/appointments')
      .then(response => setAppointments(response.data))
      .catch(error => console.error('Error fetching appointments:', error));

    // Fetch service details
    axios.get('http://your-backend-api/serviceDetails')
      .then(response => setServiceDetails(response.data))
      .catch(error => console.error('Error fetching service details:', error));

    // Fetch fee records
    axios.get('http://your-backend-api/feeRecords')
      .then(response => setFeeRecords(response.data))
      .catch(error => console.error('Error fetching fee records:', error));
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  return (
    <div className="app-container">
      <PatientInfoComponent {...patientData} />
      <MedicalRecordComponent records={medicalRecords} />
      <PrescriptionComponent prescriptions={prescriptions} />
      <DiagnosisComponent diagnosis={diagnosis} />
      <LabResultsComponent results={labResults} />
      <AppointmentInfoComponent appointments={appointments} />
      <ServiceDetailsComponent details={serviceDetails} />
      <FeeRecordComponent fees={feeRecords} />
    </div>
  );
};

export default App;
