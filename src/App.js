import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Points to src/pages/Home.js
import LabTest from "./pages/LabTest"; // Points to src/pages/LabTest.js
import DoctorAppointment from "./pages/DoctorAppointment"; // Points to src/pages/DoctorAppointment.js
import ThyroidCare from "./pages/ThyroidCare"; // Points to src/pages/ThyroidCare.js
import AboutUs from "./pages/AboutUs"; // Points to src/pages/AboutUs.js
import ContactUs from "./pages/ContactUs"; // Points to src/pages/ContactUs.js
import AppointmentList from "./pages/AppointmentList"; // Points to src/pages/AppointmentList.js
import SymptomChecker from "./pages/SymptomChecker"; // Points to src/pages/SymptomChecker.js

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lab-test" element={<LabTest />} />
            <Route path="/doctor-appointment" element={<DoctorAppointment />} />
            <Route path="/thyroid-care" element={<ThyroidCare />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/appointment-list" element={<AppointmentList />} />
            <Route path="/symptom-checker" element={<SymptomChecker />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
