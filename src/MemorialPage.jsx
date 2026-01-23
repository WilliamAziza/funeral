import React, { useState } from "react";
import flyer from "./flyer.jpeg";

export default function MemorialPage() {
  const [guestBookMessages, setGuestBookMessages] = useState([
    { name: "John Doe", message: "Rest in peace, Nana. You will be missed." },
    { name: "Jane Smith", message: "Thinking of the family during this difficult time." }
  ]);
  const [newMessage, setNewMessage] = useState({ name: "", message: "" });

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      setGuestBookMessages([...guestBookMessages, newMessage]);
      setNewMessage({ name: "", message: "" });
    }
  };
  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeIn 1.5s ease-out;
          }
          .fade-in-delay {
            animation: fadeIn 1.5s ease-out 0.5s both;
          }
          .fade-in-delay-2 {
            animation: fadeIn 1.5s ease-out 1s both;
          }
        `}
      </style>
      <main style={{
        maxWidth: "700px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to bottom, #f5f5f5, #e0e0e0)",
        minHeight: "100vh",
        animation: "fadeIn 2s ease-in-out"
      }}>
      <h1 style={{ textAlign: "center" }}>In Loving Memory</h1>
      
      <img src={flyer} alt="Memorial Flyer" style={{
        width: "100%",
        maxWidth: "500px",
        height: "auto",
        display: "block",
        margin: "0 auto 20px auto",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }} />
      

      <h2 style={{ textAlign: "center" }}>Late Theophilus Nii Kweitey Quaynor</h2>
      <p style={{ textAlign: "center", fontStyle: "italic" }}>
        1977 – 2026
      </p>

      <hr />

      <p><strong>Date:</strong> Saturday, 10th February 2026</p>
      <p><strong>Venue:</strong> St. Peter’s Methodist Church, Kumasi</p>

      <h3>Programme</h3>
      <ul>
        <li>Wake Keeping – Friday, 7:00pm</li>
        <li>Burial Service – Saturday, 9:00am</li>
      </ul>

      <p style={{ marginTop: "30px", fontStyle: "italic", textAlign: "center" }}>
        Rest in perfect peace
      </p>

      <hr />

      <h3>Photo Gallery</h3>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "10px",
        marginBottom: "30px"
      }}>
        {/* Placeholder images - replace with actual photos */}
        <img src="https://via.placeholder.com/150x150?text=Photo+1" alt="Memory 1" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
        <img src="https://via.placeholder.com/150x150?text=Photo+2" alt="Memory 2" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
        <img src="https://via.placeholder.com/150x150?text=Photo+3" alt="Memory 3" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
        <img src="https://via.placeholder.com/150x150?text=Photo+4" alt="Memory 4" style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
      </div>

      <hr />

      <h3>Guest Book</h3>
      <div style={{ marginBottom: "20px" }}>
        {guestBookMessages.map((msg, index) => (
          <div key={index} style={{
            background: "#fff",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}>
            <strong>{msg.name}:</strong> {msg.message}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmitMessage} style={{ marginBottom: "30px" }}>
        <h4>Leave a Message</h4>
        <input
          type="text"
          placeholder="Your Name"
          value={newMessage.name}
          onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "14px"
          }}
          required
        />
        <textarea
          placeholder="Your Message"
          value={newMessage.message}
          onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "14px",
            minHeight: "80px"
          }}
          required
        />
        <button type="submit" style={{
          background: "#4a5568",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
          Submit Message
        </button>
      </form>
    </main>
    </>
  );
}
