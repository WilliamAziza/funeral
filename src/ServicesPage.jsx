import React from "react";

const services = [
  {
    title: "Web Development",
    icon: "🌐",
    description: "We build responsive, high-performance websites and web applications using React, Next.js, Node.js, and modern frameworks. From simple landing pages to complex enterprise portals.",
    features: ["Custom Website Design", "Single Page Applications", "E-Commerce Platforms", "CMS Integration", "API Development", "Performance Optimization"]
  },
  {
    title: "Mobile App Development",
    icon: "📱",
    description: "Cross-platform mobile applications for iOS and Android using React Native and Flutter. Native-like performance with a single codebase, saving time and cost.",
    features: ["iOS & Android Apps", "React Native Development", "UI/UX Design", "App Store Deployment", "Push Notifications", "Offline Support"]
  },
  {
    title: "Cloud & Infrastructure",
    icon: "☁️",
    description: "Scalable cloud solutions on AWS, Azure, and Google Cloud. We handle migration, architecture design, deployment, and ongoing management.",
    features: ["Cloud Migration", "AWS/Azure Setup", "DevOps & CI/CD", "Serverless Architecture", "Database Management", "Monitoring & Alerting"]
  },
  {
    title: "IT Consulting",
    icon: "🛡️",
    description: "Strategic technology consulting to help you make informed decisions. We assess your current infrastructure and roadmap digital transformation.",
    features: ["Technology Audit", "Digital Strategy", "Cybersecurity Assessment", "Tech Stack Selection", "Team Training", "Ongoing Support"]
  }
];

const packages = [
  {
    name: "Starter",
    price: "Starting at $2,499",
    features: ["5-Page Responsive Website", "Mobile Optimized", "Contact Form", "Basic SEO Setup", "1 Month Support"],
    popular: false
  },
  {
    name: "Business",
    price: "Starting at $6,999",
    features: ["10-Page Dynamic Website", "CMS Integration", "E-Commerce Ready", "Advanced SEO", "Analytics Setup", "3 Months Support"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    features: ["Custom Web Application", "Mobile App (iOS + Android)", "Cloud Infrastructure", "Dedicated Project Manager", "Priority Support", "SLA Agreement"],
    popular: false
  }
];

export default function ServicesPage() {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeInUp 0.8s ease-out; }
        .fade-up-1 { animation: fadeInUp 0.8s ease-out 0.1s both; }
        .fade-up-2 { animation: fadeInUp 0.8s ease-out 0.2s both; }
        .fade-up-3 { animation: fadeInUp 0.8s ease-out 0.3s both; }
        .package-card:hover { transform: translateY(-8px); box-shadow: 0 24px 64px rgba(37,99,235,0.15); }
        .service-card:hover { transform: translateY(-4px); }
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
          <a href="/services" style={{ color: "#2563eb", textDecoration: "none", fontWeight: "600", fontSize: "15px" }}>Services</a>
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
        padding: "140px 20px 80px",
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
        textAlign: "center"
      }}>
        <h1 className="fade-up" style={{
          fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
          fontWeight: "800",
          color: "white",
          marginBottom: "16px"
        }}>
          Our Services
        </h1>
        <p className="fade-up-1" style={{
          color: "#94a3b8",
          fontSize: "18px",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.7"
        }}>
          Comprehensive IT solutions to accelerate your digital transformation
        </p>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "80px 20px", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px"
          }}>
            {services.map((svc, i) => (
              <div key={i} className={`fade-up-${(i % 3) + 1}`} style={{
                background: "white",
                borderRadius: "16px",
                padding: "36px 28px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                border: "1px solid #e2e8f0",
                transition: "all 0.3s ease"
              }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>{svc.icon}</div>
                <h3 style={{ fontSize: "22px", color: "#0f172a", marginBottom: "12px" }}>{svc.title}</h3>
                <p style={{ color: "#475569", lineHeight: "1.7", fontSize: "14px", marginBottom: "20px" }}>{svc.description}</p>
                <ul style={{ padding: 0, listStyle: "none" }}>
                  {svc.features.map((f, j) => (
                    <li key={j} style={{
                      padding: "6px 0",
                      color: "#475569",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}>
                      <span style={{ color: "#2563eb", fontWeight: "700" }}>&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
      </section>

      {/* Pricing / Packages */}
      <section style={{ padding: "80px 20px", background: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className="fade-up" style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "800",
            color: "#0f172a",
            marginBottom: "12px"
          }}>
            Pricing Plans
          </h2>
          <p className="fade-up-1" style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "60px",
            fontSize: "17px"
          }}>
            Flexible packages to fit your needs and budget
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            alignItems: "start"
          }}>
            {packages.map((pkg, i) => (
              <div key={i} className="package-card" style={{
                background: pkg.popular ? "linear-gradient(135deg, #0f172a, #1e3a5f)" : "white",
                borderRadius: "20px",
                padding: "40px 32px",
                boxShadow: pkg.popular ? "0 8px 40px rgba(37,99,235,0.2)" : "0 4px 24px rgba(0,0,0,0.06)",
                border: pkg.popular ? "none" : "1px solid #e2e8f0",
                position: "relative",
                transition: "all 0.3s ease",
                transform: pkg.popular ? "scale(1.05)" : "none"
              }}>
                {pkg.popular && (
                  <div style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #2563eb, #1e40af)",
                    color: "white",
                    padding: "4px 20px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "700"
                  }}>
                    Most Popular
                  </div>
                )}
                <h3 style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: pkg.popular ? "white" : "#0f172a",
                  marginBottom: "8px"
                }}>
                  {pkg.name}
                </h3>
                <p style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  color: pkg.popular ? "#60a5fa" : "#2563eb",
                  marginBottom: "24px"
                }}>
                  {pkg.price}
                </p>
                <ul style={{ padding: 0, listStyle: "none", marginBottom: "32px" }}>
                  {pkg.features.map((f, j) => (
                    <li key={j} style={{
                      padding: "8px 0",
                      color: pkg.popular ? "#cbd5e1" : "#475569",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}>
                      <span style={{ color: pkg.popular ? "#60a5fa" : "#2563eb", fontWeight: "700" }}>&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" style={{
                  display: "block",
                  textAlign: "center",
                  background: pkg.popular ? "linear-gradient(135deg, #2563eb, #1e40af)" : "transparent",
                  color: pkg.popular ? "white" : "#2563eb",
                  border: pkg.popular ? "none" : "2px solid #2563eb",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "15px",
                  transition: "all 0.2s"
                }}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: "80px 20px", background: "#f8fafc" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="fade-up" style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: "800",
            color: "#0f172a",
            marginBottom: "40px"
          }}>
            Technologies We Work With
          </h2>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px"
          }}>
            {["React", "Next.js", "Node.js", "Python", "TypeScript", "AWS", "Docker", "PostgreSQL", "MongoDB", "GraphQL", "Tailwind CSS", "Figma"].map((tech, i) => (
              <div key={i} className={`fade-up-${(i % 3) + 1}`} style={{
                background: "white",
                padding: "12px 28px",
                borderRadius: "30px",
                border: "1px solid #e2e8f0",
                fontWeight: "600",
                color: "#1e293b",
                fontSize: "15px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
              }}>
                {tech}
              </div>
            ))}
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
