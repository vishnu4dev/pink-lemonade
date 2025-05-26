import React, { useState } from 'react';
import '../style/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email required.";
    if (!/^[\d\s+()-]{7,15}$/.test(formData.phone)) newErrors.phone = "Valid phone number required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Sending data to server:", formData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2>Enquire Now</h2>
          <p>Planning an unforgettable night at Pink Lemonade? Reach out to reserve a table, plan events, or get personalized service.</p>
          <p className="highlight">+44 1234 567890<br />reservations@pinklemonade.uk</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input name="name" type="text" placeholder="Full Name*" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input name="email" type="email" placeholder="Email Address*" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input name="phone" type="tel" placeholder="Phone Number*" value={formData.phone} onChange={handleChange} />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <input name="date" type="text" placeholder="Preferred Date (DD/MM/YYYY)" value={formData.date} onChange={handleChange} />
          </div>
          <div className="form-group">
            <textarea name="message" rows="4" placeholder="Additional details..." value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit">Submit Enquiry</button>
          {submitted && <div className="submit-message">Thank you! We'll get back to you shortly.</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
