import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { jobs } from "../utils/data";

const ApplyForm = () => {
  const { id } = useParams();
  const job = jobs[id - 1];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    experience: "",
    experienceYears: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone number is required";
      if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Phone number must be exactly 10 digits";
      }
    }
    if (step === 2) {
      if (!formData.resume) newErrors.resume = "Resume is required";
    }
    if (step === 3) {
      if (!formData.experience) newErrors.experience = "Experience is required";
      if (!formData.experienceYears)
        newErrors.experienceYears = "Experience years are required";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleNextStep = () => {
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setStep(step + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateStep();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      console.log("Application submitted:", formData);
      setSuccessMessage(
        "Your application was submitted successfully! We'll get in touch soon."
      );
      // Handle form submission (e.g., send data to a backend server)
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold my-6 text-center">
        Application Form - {job.jobTitle}
      </h1>
      {successMessage && (
        <div className="min-h-[400px]">
          <div className="bg-green-100 mt-10 text-green-700 p-4 rounded-lg mb-6">
            {successMessage}
          </div>
        </div>
      )}
      {!successMessage && (
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="min-h-[400px]">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="min-h-[400px]">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="resume"
                >
                  Upload Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
                {errors.resume && (
                  <p className="text-red-500">{errors.resume}</p>
                )}
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="min-h-[400px]">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="experience"
                >
                  Relevant Experience
                </label>
                <textarea
                  name="experience"
                  id="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Describe your relevant experience"
                  rows="5"
                ></textarea>
                {errors.experience && (
                  <p className="text-red-500">{errors.experience}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="experienceYears"
                >
                  Years of Experience
                </label>
                <input
                  type="number"
                  min={0}
                  name="experienceYears"
                  id="experienceYears"
                  value={formData.experienceYears}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter your years of experience"
                />
                {errors.experienceYears && (
                  <p className="text-red-500">{errors.experienceYears}</p>
                )}
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Submit Application
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default ApplyForm;
