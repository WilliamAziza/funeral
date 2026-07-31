import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeInUp 0.8s ease-out; }
        .fade-up-1 { animation: fadeInUp 0.8s ease-out 0.15s both; }
        .fade-up-2 { animation: fadeInUp 0.8s ease-out 0.3s both; }
        .input-field:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); outline: none; }
      `}</style>

      {/* Navigation */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}>
        <div style={{ fontSize: "24px", fontWeight: "800", color: "#1e40af" }}>
          <span style={{ color: "#2563eb" }}>We</span>Create
        </div>
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          <a href="/" style={{ color: "#1e293b", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>Home</a>
          <a href="/services" style={{ color: "#1e293b", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>Services</a>
          <a href="/contact" style={{
            background: "linear-gradient(135deg, #2563eb, #1e40af)",
            color: "white",
            padding: "10px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "15px"
          }}>Contact Us</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        padding: "120px 20px 60px",
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
        textAlign: "center"
      }}>
        <h1 className="fade-up" style={{
          fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
          fontWeight: "800",
          color: "white",
          marginBottom: "12px"
        }}>
          Let's Talk
        </h1>
        <p className="fade-up-1" style={{
          color: "#94a3b8",
          fontSize: "18px",
          maxWidth: "550px",
          margin: "0 auto",
          lineHeight: "1.7"
        }}>
          Ready to start your project? Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </section>

      {/* Contact Form */}
      <section style={{ padding: "60px 20px 80px", background: "#f8fafc" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="fade-up" style={{
            background: "white",
            borderRadius: "20px",
            padding: "48px 40px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            border: "1px solid #e2e8f0"
          }}>
            {submitted && (
              <div className="fade-up" style={{
                background: "#ecfdf5",
                border: "1px solid #a7f3d0",
                color: "#065f46",
                padding: "16px 20px",
                borderRadius: "12px",
                marginBottom: "24px",
                fontWeight: "600",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <span style={{ fontSize: "20px" }}>&#10003;</span>
                Thank you! We've received your message and will get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontWeight: "600", color: "#0f172a", marginBottom: "6px", fontSize: "14px" }}>
                  Full Name <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="John Doe"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "10px",
                    fontSize: "15px",
                    transition: "all 0.2s",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontWeight: "600", color: "#0f172a", marginBottom: "6px", fontSize: "14px" }}>
                  Email Address <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="john@example.com"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "10px",
                    fontSize: "15px",
                    transition: "all 0.2s",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontWeight: "600", color: "#0f172a", marginBottom: "6px", fontSize: "14px" }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="+233 50 123 4567"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "10px",
                    fontSize: "15px",
                    transition: "all 0.2s",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontWeight: "600", color: "#0f172a", marginBottom: "6px", fontSize: "14px" }}>
                  Your Message <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Tell us about your project..."
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "10px",
                    fontSize: "15px",
                    transition: "all 0.2s",
                    resize: "vertical",
                    fontFamily: "inherit",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #2563eb, #1e40af)",
                  color: "white",
                  padding: "14px 32px",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  boxShadow: "0 4px 16px rgba(37,99,235,0.3)"
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="fade-up-2" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "40px"
          }}>
            <div style={{
              background: "white",
              padding: "24px",
              borderRadius: "16px",
              textAlign: "center",
              border: "1px solid #e2e8f0"
            }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>&#9993;</div>
              <h4 style={{ color: "#0f172a", marginBottom: "4px", fontSize: "15px" }}>Email</h4>
              <p style={{ color: "#475569", fontSize: "14px" }}>hello@wecreate.dev</p>
            </div>
            <div style={{
              background: "white",
              padding: "24px",
              borderRadius: "16px",
              textAlign: "center",
              border: "1px solid #e2e8f0"
            }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>&#9742;</div>
              <h4 style={{ color: "#0f172a", marginBottom: "4px", fontSize: "15px" }}>Phone</h4>
              <p style={{ color: "#475569", fontSize: "14px" }}>+233 50 123 4567</p>
            </div>
            <div style={{
              background: "white",
              padding: "24px",
              borderRadius: "16px",
              textAlign: "center",
              border: "1px solid #e2e8f0"
            }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>&#127758;</div>
              <h4 style={{ color: "#0f172a", marginBottom: "4px", fontSize: "15px" }}>Location</h4>
              <p style={{ color: "#475569", fontSize: "14px" }}>Accra, Ghana</p>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "40px 20px",
        background: "#0f172a",
        borderTop: "1px solid rgba(255,255,255,0.05)"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "22px", fontWeight: "800", color: "white", marginBottom: "12px" }}>
            <span style={{ color: "#60a5fa" }}>We</span>Create
          </div>
          <p style={{ color: "#64748b", fontSize: "14px" }}>
            &copy; 2025 WeCreate Digital Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
