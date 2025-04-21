import React from 'react';
import { Link } from 'react-router-dom';

// Correct image imports
import labTestImage from '../assets/labtest-image.jpg';
import quizImage from '../assets/quiz-image.jpg';
import doctorImage from '../assets/doctor-image.jpg';
import thyroidCareImage from '../assets/thyroid-care-image.jpg';
import aboutUsImage from '../assets/about-us-image.jpg';
import contactUsImage from '../assets/contact-us-image.jpg';
import appointmentListImage from '../assets/appointment-list-image.jpg'; // New image for the Appointment List card

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 p-8">
      <h1 className="text-5xl font-bold text-center text-indigo-700 mb-12">
        Welcome to Thyroid Wellness Hub
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Link to="/lab-test" className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 p-4 text-center">
          <img src={labTestImage} alt="Lab Test" className="rounded-xl h-44 w-full object-cover mb-4" />
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">Lab Tests</h2>
          <p className="text-gray-600">Easily book your thyroid-related lab tests online.</p>
        </Link>

        <Link to="/symptom-checker" className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 p-4 text-center">
          <img src={quizImage} alt="Symptom Quiz" className="rounded-xl h-44 w-full object-cover mb-4" />
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">Symptom Checker</h2>
          <p className="text-gray-600">Reflect on your lifestyle with our friendly quiz.</p>
        </Link>

        <Link to="/doctor-appointment" className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 p-4 text-center">
          <img src={doctorImage} alt="Doctor Appointment" className="rounded-xl h-44 w-full object-cover mb-4" />
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">Doctor Appointment</h2>
          <p className="text-gray-600">Connect with thyroid care specialists seamlessly.</p>
        </Link>

        <Link to="/appointment-list" className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 p-4 text-center">
          <img src={appointmentListImage} alt="Appointment List" className="rounded-xl h-44 w-full object-cover mb-4" />
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">Appointment List</h2>
          <p className="text-gray-600">View all your booked doctor appointments here.</p>
        </Link>

        <Link to="/thyroid-care" className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 p-4 text-center">
          <img src={thyroidCareImage} alt="Thyroid Care" className="rounded-xl h-44 w-full object-cover mb-4" />
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">Thyroid Care</h2>
          <p className="text-gray-600">Learn how to care for your thyroid naturally and confidently.</p>
        </Link>

        <Link to="/about" className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 p-4 text-center">
          <img src={aboutUsImage} alt="About Us" className="rounded-xl h-44 w-full object-cover mb-4" />
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">About Us</h2>
          <p className="text-gray-600">Meet the team behind your health journey.</p>
        </Link>

        <Link to="/contact" className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 p-4 text-center">
          <img src={contactUsImage} alt="Contact Us" className="rounded-xl h-44 w-full object-cover mb-4" />
          <h2 className="text-2xl font-bold text-indigo-600 mb-2">Contact Us</h2>
          <p className="text-gray-600">We're here to help you anytime, reach out!</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
