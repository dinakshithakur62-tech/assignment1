const AboutPage = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          background: "var(--secondary-color)",
          padding: "24px",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ marginBottom: "16px" }}>About</h1>

        <p style={{ marginBottom: "8px", fontSize: "16px" }}>
          <strong>Name:</strong> Dinakshi Thakur
        </p>
        <p style={{ marginBottom: "20px", fontSize: "16px" }}>
          <strong>Student Number:</strong> 21782127
        </p>

        <h2 style={{ marginBottom: "12px" }}>Demo Video</h2>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            background: "#000",
          }}
        >
          <video
            src="/vid.mp4"
            controls
            aria-label="Demo video demonstrating how to use the site"
            style={{ width: "100%", borderRadius: "6px" }}
          >
            Your browser does not support the video tag.  
            Please{" "}
            <a href="/vid.mp4" style={{ color: "var(--primary-color)" }}>
              download the video here
            </a>.
          </video>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;