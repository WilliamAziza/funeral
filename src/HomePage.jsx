import React from "react";

const services = [
  { icon: "🌐", title: "Web Development", desc: "Custom websites, web apps, and e-commerce platforms built with modern technologies." },
  { icon: "📱", title: "Mobile Apps", desc: "Cross-platform mobile applications for iOS and Android using React Native." },
  { icon: "☁️", title: "Cloud Solutions", desc: "Scalable cloud infrastructure setup, migration, and management on AWS/Azure." },
  { icon: "🛡️", title: "IT Consulting", desc: "Strategic technology consulting to help your business grow and stay secure." }
];

const portfolio = [
  { title: "E-Commerce Platform", desc: "Full-featured online store with payment integration" },
  { title: "Business Dashboard", desc: "Real-time analytics dashboard for data-driven decisions" },
  { title: "Booking System", desc: "Automated appointment scheduling platform" },
  { title: "Corporate Website", desc: "Modern brand presence for a multinational company" }
];

const testimonials = [
  { name: "Sarah Mensah", role: "CEO, TechStart Ghana", text: "They delivered our platform ahead of schedule. Exceptional quality and support!" },
  { name: "James Osei", role: "Founder, DevHub Africa", text: "Transformative IT solutions. Our revenue grew 40% after the digital upgrade." },
  { name: "Ama Serwaa", role: "CTO, FinEdge Ltd", text: "Professional team with deep technical expertise. Highly recommended." }
];

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes slideIn { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
          .hero-fade { animation: fadeInUp 1.2s ease-out; }
          .slide-in { animation: slideIn 1s ease-out; }
          .stagger-1 { animation: fadeInUp 0.8s ease-out 0.2s both; }
          .stagger-2 { animation: fadeInUp 0.8s ease-out 0.4s both; }
          .stagger-3 { animation: fadeInUp 0.8s ease-out 0.6s both; }
          .service-card:hover { transform: translateY(-8px); box-shadow: 0 20px 60px rgba(37,99,235,0.2); }
          .portfolio-card:hover { transform: scale(1.03); }
        `
      }} />
      <nav style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 40px",background:"rgba(255,255,255,0.95)",backdropFilter:"blur(10px)",boxShadow:"0 2px 20px rgba(0,0,0,0.06)",position:"fixed",top:0,left:0,right:0,zIndex:1000}}>
        <div style={{fontSize:"24px",fontWeight:"800",color:"#1e40af"}}><span style={{color:"#2563eb"}}>We</span>Create</div>
        <div style={{display:"flex",gap:"28px",alignItems:"center"}}>
          <a href="/" style={{color:"#1e293b",textDecoration:"none",fontWeight:"600",fontSize:"15px"}}>Home</a>
          <a href="/services" style={{color:"#1e293b",textDecoration:"none",fontWeight:"600",fontSize:"15px"}}>Services</a>
          <a href="/contact" style={{background:"linear-gradient(135deg, #2563eb, #1e40af)",color:"white",padding:"10px 24px",borderRadius:"8px",textDecoration:"none",fontWeight:"600",fontSize:"15px"}}>Contact Us</a>
        </div>
      </nav>

      <section style={{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",background:"linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",padding:"100px 20px 60px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"-50%",left:"-50%",width:"200%",height:"200%",background:"radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 60%)"}} />
        <div className="hero-fade" style={{position:"relative",zIndex:1}}>
          <h1 style={{fontSize:"clamp(2.5rem, 6vw, 4.5rem)",fontWeight:"800",color:"white",marginBottom:"16px",lineHeight:"1.15",textShadow:"0 2px 20px rgba(0,0,0,0.3)"}}>We Build Digital<br /><span style={{background:"linear-gradient(135deg, #60a5fa, #a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Solutions That Matter</span></h1>
          <p style={{fontSize:"clamp(1rem, 2vw, 1.3rem)",color:"#94a3b8",maxWidth:"600px",margin:"0 auto 40px",lineHeight:"1.7"}}>From stunning websites to powerful enterprise systems we turn your ideas into reality with cutting-edge technology.</p>
          <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
            <a href="/services" style={{background:"linear-gradient(135deg, #2563eb, #1e40af)",color:"white",padding:"14px 36px",borderRadius:"10px",textDecoration:"none",fontWeight:"700",fontSize:"16px",boxShadow:"0 8px 32px rgba(37,99,235,0.35)"}}>Our Services</a>
            <a href="/contact" style={{background:"transparent",color:"white",padding:"14px 36px",borderRadius:"10px",textDecoration:"none",fontWeight:"700",fontSize:"16px",border:"2px solid rgba(255,255,255,0.2)"}}>Get in Touch</a>
          </div>
      </section>

      <section style={{padding:"100px 20px",background:"#f8fafc"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <h2 className="slide-in" style={{textAlign:"center",fontSize:"clamp(2rem, 4vw, 3rem)",fontWeight:"800",color:"#0f172a",marginBottom:"16px"}}>What We Do</h2>
          <p style={{textAlign:"center",color:"#64748b",maxWidth:"600px",margin:"0 auto 60px",fontSize:"18px"}}>End-to-end IT solutions tailored to your business needs</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"30px"}}>
            {services.map(function(svc, i) { return (
              <div key={i} className="service-card" style={{background:"white",padding:"36px 28px",borderRadius:"16px",boxShadow:"0 4px 24px rgba(0,0,0,0.06)",border:"1px solid rgba(37,99,235,0.05)"}}>
                <div style={{fontSize:"48px",marginBottom:"16px"}}>{svc.icon}</div>
                <h3 style={{color:"#0f172a",fontSize:"22px",marginBottom:"12px"}}>{svc.title}</h3>
                <p style={{color:"#475569",lineHeight:"1.7",fontSize:"15px"}}>{svc.desc}</p>
              </div>
            );})}
          </div>
      </section>

      <section style={{padding:"100px 20px",background:"white"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto"}}>
          <h2 className="slide-in" style={{textAlign:"center",fontSize:"clamp(2rem, 4vw, 3rem)",fontWeight:"800",color:"#0f172a",marginBottom:"16px"}}>Our Work</h2>
          <p style={{textAlign:"center",color:"#64748b",maxWidth:"600px",margin:"0 auto 60px",fontSize:"18px"}}>Projects we have delivered with excellence</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"24px"}}>
            {portfolio.map(function(item, i) { return (
              <div key={i} className="portfolio-card" style={{background:"linear-gradient(135deg, #f8fafc, #eef2ff)",padding:"36px 28px",borderRadius:"16px",border:"1px solid #e2e8f0"}}>
                <div style={{width:"56px",height:"56px",borderRadius:"12px",background:"linear-gradient(135deg, #2563eb, #1e40af)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",color:"white",fontWeight:"700",marginBottom:"20px"}}>{i + 1}</div>
                <h3 style={{color:"#0f172a",fontSize:"20px",marginBottom:"10px"}}>{item.title}</h3>
                <p style={{color:"#475569",lineHeight:"1.7",fontSize:"14px"}}>{item.desc}</p>
              </div>
            );})}
          </div>
      </section>

      <section style={{padding:"100px 20px",background:"#f8fafc"}}>
        <div style={{maxWidth:"1000px",margin:"0 auto"}}>
          <h2 className="slide-in" style={{textAlign:"center",fontSize:"clamp(2rem, 4vw, 3rem)",fontWeight:"800",color:"#0f172a",marginBottom:"60px"}}>What Our Clients Say</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"30px"}}>
            {testimonials.map(function(t, i) { return (
              <div key={i} className={"stagger-" + (i + 1)} style={{background:"white",padding:"32px",borderRadius:"16px",boxShadow:"0 4px 24px rgba(0,0,0,0.06)",border:"1px solid #e2e8f0"}}>
                <div style={{fontSize:"36px",color:"#2563eb",marginBottom:"12px"}}>{"\u201c"}</div>
                <p style={{color:"#475569",fontStyle:"italic",lineHeight:"1.7",marginBottom:"20px",fontSize:"15px"}}>{t.text}</p>
                <div>
                  <strong style={{color:"#0f172a",display:"block"}}>{t.name}</strong>
                  <span style={{color:"#64748b",fontSize:"13px"}}>{t.role}</span>
                </div>
            );})}
          </div>
      </section>

      <section style={{padding:"80px 20px",background:"linear-gradient(135deg, #0f172a, #1e3a5f)",textAlign:"center"}}>
        <h2 style={{fontSize:"clamp(1.8rem, 3vw, 2.8rem)",fontWeight:"800",color:"white",marginBottom:"16px"}}>Ready to Build Something Great?</h2>
        <p style={{color:"#94a3b8",maxWidth:"500px",margin:"0 auto 36px",fontSize:"18px"}}>Let us discuss your project and create a solution that drives results.</p>
        <a href="/contact" style={{background:"linear-gradient(135deg, #2563eb, #1e40af)",color:"white",padding:"16px 48px",borderRadius:"12px",textDecoration:"none",fontWeight:"700",fontSize:"17px",display:"inline-block",boxShadow:"0 8px 32px rgba(37,99,235,0.35)"}}>Start Your Project</a>
      </section>

      <footer style={{padding:"40px 20px",background:"#0f172a",borderTop:"1px solid rgba(255,255,255,0.05)"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",textAlign:"center"}}>
          <div style={{fontSize:"22px",fontWeight:"800",color:"white",marginBottom:"12px"}}><span style={{color:"#60a5fa"}}>We</span>Create</div>
          <p style={{color:"#64748b",fontSize:"14px"}}>&copy; 2025 WeCreate Digital Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
