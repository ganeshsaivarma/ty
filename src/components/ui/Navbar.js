import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4 flex gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/lab-test" className="hover:underline">Lab Test</Link>
      <Link to="/doctor-appointment" className="hover:underline">Doctor Appointment</Link>
      <Link to="/thyroid-care" className="hover:underline">Thyroid Care</Link>
      <Link to="/symptom-checker" className="hover:underline">Symptom Checker</Link>  {/* ✅ Added Link */}
      <Link to="/about" className="hover:underline">About Us</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </nav>
  );
};

export default Navbar;
