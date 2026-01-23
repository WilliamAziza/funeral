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
      background: "white"
    }}>
      <h2>Scan for Funeral Details</h2>

      <div style={{ padding: "16px", background: "white" }}>
        <QRCode value={link} size={220} />
      </div>

      <p style={{ fontSize: "14px", marginTop: "10px" }}>
        Memorial Page
      </p>
    </div>
  );
}
