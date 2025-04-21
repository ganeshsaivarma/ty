import React, { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const tests = [
  { id: 1, name: "TSH (Thyroid Stimulating Hormone)", price: "₹300", description: "Measures thyroid gland activity." },
  { id: 2, name: "T3 (Triiodothyronine)", price: "₹400", description: "Checks the level of active thyroid hormone." },
  { id: 3, name: "T4 (Thyroxine)", price: "₹400", description: "Measures the total amount of T4 hormone." }
];

const LabTest = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleConfirmBooking = async () => {
    if (!patientName || !patientEmail) {
      setErrorMessage("Please fill in both name and email.");
      return;
    }

    setIsLoading(true);
    try {
      await addDoc(collection(db, "labBookings"), {
        testName: selectedTest.name,
        price: selectedTest.price,
        patientName,
        patientEmail,
        bookedAt: new Date()
      });
      alert("Test booked successfully!");
      setSelectedTest(null);
      setPatientName("");
      setPatientEmail("");
      setErrorMessage("");
    } catch (error) {
      console.error("Error booking test:", error);
      alert("Failed to book test.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">🧪 Available Thyroid Lab Tests</h2>
      <ul className="space-y-4">
        {tests.map((test) => (
          <li key={test.id} className="border p-4 rounded flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">{test.name}</h3>
              <p className="text-sm text-gray-600">{test.description}</p>
              <p className="text-indigo-700 font-semibold mt-1">{test.price}</p>
            </div>
            <button
              onClick={() => setSelectedTest(test)}
              className="bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700"
            >
              Book Test
            </button>
          </li>
        ))}
      </ul>

      {selectedTest && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow text-center max-w-sm w-full">
            <h3 className="font-bold text-lg mb-2">Confirm Booking</h3>
            <p className="mb-2">Test: <strong>{selectedTest.name}</strong></p>
            {errorMessage && <p className="text-red-600 mb-2">{errorMessage}</p>}
            <input
              type="text"
              placeholder="Your Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full border p-2 rounded mb-2"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
              className="w-full border p-2 rounded mb-2"
              required
            />
            <div className="flex justify-center gap-4 mt-3">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={handleConfirmBooking}
                disabled={isLoading}
              >
                {isLoading ? "Booking..." : "Confirm"}
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => {
                  setSelectedTest(null);
                  setPatientName("");
                  setPatientEmail("");
                  setErrorMessage("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabTest;
