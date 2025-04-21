// src/pages/AppointmentList.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentCollection = collection(db, "appointments");
        const snapshot = await getDocs(appointmentCollection);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        alert("Failed to fetch appointments. Check console for errors.");
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">📋 Appointment List</h2>

      {appointments.length > 0 ? (
        <>
          <ul className="space-y-4">
            {appointments.map((appt) => (
              <li key={appt.id} className="border p-4 rounded shadow">
                <p><strong>Doctor:</strong> {appt.doctor}</p>
                <p><strong>Specialization:</strong> {appt.specialization}</p>
                <p><strong>Date:</strong> {appt.date}</p>
                <p><strong>Time:</strong> {appt.time}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-green-700 font-semibold text-center">
            ✅ Total Appointments: {appointments.length}
          </p>
        </>
      ) : (
        <p className="text-center text-gray-500">No appointments booked yet.</p>
      )}
    </div>
  );
};

export default AppointmentList;
