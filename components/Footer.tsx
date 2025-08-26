"use client";
const Footer = () => {
  const today = new Date().toLocaleDateString();

  return (
    <footer
  style={{
    padding: "12px",
    textAlign: "center",
    background: "var(--secondary-color)",
    borderTop: "1px solid #ccc",
  }}
>

      <p>© {today} | Dinakshi Thakur | 21782127</p>
    </footer>
  );
}

export default Footer;