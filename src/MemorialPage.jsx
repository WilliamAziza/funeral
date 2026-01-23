import flyer from "./flyer.jpeg";

export default function MemorialPage() {
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
      

      <h2 style={{ textAlign: "center" }}>Late Nana Kofi Mensah</h2>
      <p style={{ textAlign: "center", fontStyle: "italic" }}>
        1952 – 2026
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
    </main>
    </>
  );
}
