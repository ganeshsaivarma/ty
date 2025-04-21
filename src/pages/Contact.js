import React, { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setIsLoading(true);

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "messages"), formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">📬 Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-2 rounded"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
