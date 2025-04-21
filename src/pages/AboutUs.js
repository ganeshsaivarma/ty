import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4 text-center">About Us</h1>
      <p className="text-gray-700 text-lg mb-4">
        Welcome to the Thyroid Checkup App – your trusted companion for thyroid health management.
      </p>
      <p className="text-gray-700 text-lg mb-4">
        🎯 Our goal is to provide a simple, user-friendly platform to:
      </p>
      <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
        <li>Book lab tests quickly</li>
        <li>Schedule appointments with expert doctors</li>
        <li>Access thyroid care tips and guides</li>
      </ul>
      <p className="text-gray-700 text-lg">
        🙋‍♀️ Built with 💙 by a passionate developer to help users take control of their health in a smarter, easier way.
      </p>
    </div>
  );
};

export default AboutUs;

