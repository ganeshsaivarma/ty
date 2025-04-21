import React, { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const doctors = [
  { name: "Dr. Akbarsha", specialization: "Endocrinologist", image: "/images/akbarsha.jpg" },
  { name: "Dr. Ramya Nair", specialization: "Thyroid Specialist", image: "/images/ramya nair.jpg" },
  { name: "Dr. Sathish Kumar", specialization: "General Physician", image: "/images/sathish kumar.jpg" },
  { name: "Dr. Bharathi", specialization: "Endocrinologist", image: "/images/bharathi.jpg" },
];

const DoctorAppointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);

  const handleBook = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleConfirm = async () => {
    if (!appointmentDate || !appointmentTime) {
      alert("Please select date and time.");
      return;
    }
    try {
      await addDoc(collection(db, "appointments"), {
        doctor: selectedDoctor.name,
        specialization: selectedDoctor.specialization,
        date: appointmentDate,
        time: appointmentTime,
        createdAt: new Date()
      });
      setAppointmentSuccess(true); // Show success modal
      setSelectedDoctor(null);
      setAppointmentDate("");
      setAppointmentTime("");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment.");
    }
  };

  const handleCloseSuccess = () => {
    setAppointmentSuccess(false); // Close success modal
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">👩‍⚕️ Book Your Doctor</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map((doctor, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src={doctor.image} alt={doctor.name} className="w-24 h-24 mx-auto rounded-full mb-2 transition-transform transform hover:scale-110" />
            <h3 className="text-lg font-semibold text-indigo-800">{doctor.name}</h3>
            <p className="text-sm text-gray-500">{doctor.specialization}</p>
            <button
              onClick={() => handleBook(doctor)}
              className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none transition-transform transform hover:scale-105"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Confirm Appointment</h3>
            <p className="mb-2 text-lg">{selectedDoctor.name}</p>
            <input
              type="date"
              className="border p-2 mb-2 w-full rounded focus:outline-none"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
            <input
              type="time"
              className="border p-2 mb-4 w-full rounded focus:outline-none"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
            />
            <div className="space-x-2">
              <button
                onClick={handleConfirm}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Confirm
              </button>
              <button
                onClick={() => setSelectedDoctor(null)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {appointmentSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-2 text-green-600">Success!</h3>
            <p>Your appointment with {selectedDoctor?.name} has been successfully booked.</p>
            <p>Date: {appointmentDate}</p>
            <p>Time: {appointmentTime}</p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleCloseSuccess}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorAppointment;
