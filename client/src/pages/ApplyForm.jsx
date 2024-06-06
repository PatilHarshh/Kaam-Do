import React, { useState } from "react";

function ApplyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    resume: null,
    experience: "",
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validateStep1 = () => {
    let validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      validationErrors.email = "Email is invalid";
    if (!formData.address) validationErrors.address = "Address is required";
    if (!formData.phone) validationErrors.phone = "Phone is required";
    if (!/^\d{10}$/.test(formData.phone))
      validationErrors.phone = "Phone number is invalid";
    return validationErrors;
  };

  const validateStep2 = () => {
    let validationErrors = {};
    if (!formData.resume) validationErrors.resume = "Resume is required";
    return validationErrors;
  };

  const handleNext = () => {
    let validationErrors = {};
    if (step === 1) validationErrors = validateStep1();
    if (step === 2) validationErrors = validateStep2();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setErrors({});
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Final form submission logic here
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ marginTop: '50px', textAlign: 'center', minHeight: "600px" }}>
        <h1 style={{ fontSize: '30px' }}>Thank you for your application!</h1>
        <p>We have received your application and will be in touch soon.</p>
      </div>
    );
  }

  return (
    <div className="" style={{minHeight: "600px"}}>
      <form
        onSubmit={handleSubmit}
        className="apply"
        style={{ marginTop: "50px" }}
      >
        {step === 1 && (
          <div style={{ marginTop: "50px" }}>
            <h1 style={{ textAlign: "center", fontSize: "30px" }}>
              Application Form
            </h1>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <span>{errors.address}</span>}
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span>{errors.phone}</span>}
            </div>
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <div>
              <label>Resume:</label>
              <input type="file" name="resume" onChange={handleChange} />
              {errors.resume && <span>{errors.resume}</span>}
            </div>
            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <div>
              <label>Experience (if any):</label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ApplyForm;
