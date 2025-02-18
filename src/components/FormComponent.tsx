import React, { useState } from "react";
import "../App.css";

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    skills: "",
    email: "",
    phone: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function setUserData(key: string, value: string) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>Fill the Form</h2>
      <form onSubmit={handleSubmit} className="form-horizontal">
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" value={formData.firstName} onChange={(e) => setUserData("firstName", e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" value={formData.lastName} onChange={(e) => setUserData("lastName", e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" value={formData.age} onChange={(e) => setUserData("age", e.target.value)} required />
        </div>
        <div className="form-group gender-group">
          <label>Gender:</label>
          <input type="radio" name="gender" value="Male" onChange={(e) => setUserData("gender", e.target.value)} checked={formData.gender === "Male"} /> Male
          <input type="radio" name="gender" value="Female" onChange={(e) => setUserData("gender", e.target.value)} checked={formData.gender === "Female"} /> Female
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={formData.email} onChange={(e) => setUserData("email", e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="number" value={formData.phone} onChange={(e) => setUserData("phone", e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <select value={formData.skills} onChange={(e) => setUserData("skills", e.target.value)} required>
            <option value="">Select a skill</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Node.js">Node.js</option>
            <option value="CSS">CSS</option>
          </select>
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea value={formData.address} onChange={(e) => setUserData("address", e.target.value)} required></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {submitted && (
        <div className="popup">
          <h3>Form Submitted Successfully!</h3>
          <p><strong>First Name:</strong> {formData.firstName}</p>
          <p><strong>Last Name:</strong> {formData.lastName}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Skills:</strong> {formData.skills}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Address:</strong> {formData.address}</p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
