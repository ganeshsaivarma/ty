import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // For the accordion
import { motion } from "framer-motion"; // Importing motion

const ThyroidCare = () => {
  const [expanded, setExpanded] = useState({
    precautions: false,
    diet: false,
    lifestyle: false,
  });

  const toggleSection = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-r from-indigo-50 via-purple-100 to-indigo-50">
      <motion.h1
        className="text-4xl font-extrabold mb-6 text-indigo-700 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Thyroid Care Guide 🧠🩺
      </motion.h1>

      {/* Card Container */}
      <motion.div
        className="grid gap-6 md:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Precautions Card */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-5 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <span className="mr-2">🛡️</span>Precautions
            <button
              onClick={() => toggleSection("precautions")}
              className="ml-auto text-gray-500"
            >
              {expanded.precautions ? (
                <FiChevronUp size={20} />
              ) : (
                <FiChevronDown size={20} />
              )}
            </button>
          </h2>
          {expanded.precautions && (
            <motion.ul
              className="list-disc pl-5 text-gray-700 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <li>Take thyroid medications on an empty stomach at the same time every day.</li>
              <li>Avoid self-medicating or adjusting your dose without consulting your doctor.</li>
              <li>Get thyroid function tests regularly if advised by your doctor.</li>
              <li>Limit exposure to environmental toxins, such as pollutants and heavy metals, which can interfere with thyroid function.</li>
            </motion.ul>
          )}
        </motion.div>

        {/* Diet Tips Card */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-5 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <span className="mr-2">🥗</span>Diet Tips
            <button
              onClick={() => toggleSection("diet")}
              className="ml-auto text-gray-500"
            >
              {expanded.diet ? (
                <FiChevronUp size={20} />
              ) : (
                <FiChevronDown size={20} />
              )}
            </button>
          </h2>
          {expanded.diet && (
            <motion.ul
              className="list-disc pl-5 text-gray-700 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <li>Include iodine-rich foods like dairy, seaweed, and certain fish.</li>
              <li>Eat selenium-rich foods such as Brazil nuts, sunflower seeds, and brown rice.</li>
              <li>Limit soy products and cruciferous vegetables (like cabbage, broccoli) if you have hypothyroidism, as they may interfere with thyroid function.</li>
              <li>Maintain a balanced diet rich in fruits, vegetables, whole grains, and lean proteins to support overall health.</li>
            </motion.ul>
          )}
        </motion.div>

        {/* Lifestyle Measures Card */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-5 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <span className="mr-2">🏃</span>Lifestyle Measures
            <button
              onClick={() => toggleSection("lifestyle")}
              className="ml-auto text-gray-500"
            >
              {expanded.lifestyle ? (
                <FiChevronUp size={20} />
              ) : (
                <FiChevronDown size={20} />
              )}
            </button>
          </h2>
          {expanded.lifestyle && (
            <motion.ul
              className="list-disc pl-5 text-gray-700 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <li>Get 7–8 hours of sleep per night to maintain hormone balance.</li>
              <li>Practice stress-reducing activities like yoga, meditation, or walking.</li>
              <li>Engage in regular physical activity to boost metabolism and support thyroid function.</li>
              <li>Stay consistent with follow-ups and treatment plans prescribed by your healthcare provider.</li>
            </motion.ul>
          )}
        </motion.div>
      </motion.div>

      {/* Footer Message */}
      <motion.div
        className="mt-8 p-6 bg-indigo-700 text-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p className="text-center text-lg font-semibold">
          🌱 Remember, self-care is the key to maintaining a healthy thyroid! Stay consistent with your treatment and keep taking small steps towards your well-being. 💪
        </p>
      </motion.div>
    </div>
  );
};

export default ThyroidCare;
