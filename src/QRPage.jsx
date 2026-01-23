import QRCode from "react-qr-code";

export default function QRPage() {
  const link = "https://funeral-pi.vercel.app/memorial";

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      fontFamily: "'Arial', sans-serif",
      padding: "20px"
    }}>
      <h2 style={{
        color: "#333",
        fontSize: "2.5rem",
        marginBottom: "20px",
        textAlign: "center",
        textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
      }}>
        Scan for Funeral Details
      </h2>

      <div style={{
        padding: "24px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        border: "2px solid #e0e0e0"
      }}>
        <QRCode value={link} size={220} />
      </div>

      <p style={{
        fontSize: "16px",
        marginTop: "20px",
        color: "#555",
        textAlign: "center",
        fontWeight: "500"
      }}>
        Memorial Page
      </p>
    </div>
  );
}
