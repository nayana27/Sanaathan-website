import React, { useState } from "react";

function AppointmentPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send to backend API (Spring Boot)
    alert("Appointment submitted successfully!");
  };

  return (
    <div className="container my-5">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Select Doctor/Service</label>
          <select name="doctor" value={form.doctor} onChange={handleChange} className="form-select" required>
            <option value="">Select</option>
            <option>Dr. Rama Prasad</option>
            <option>Dr. Meera Devi</option>
            <option>Dr. Karthik Sharma</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Preferred Date & Time</label>
          <input name="date" value={form.date} onChange={handleChange} type="datetime-local" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Notes/Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentPage;
