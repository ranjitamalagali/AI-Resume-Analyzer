import { useState } from "react";
import { Link } from "react-router-dom";
import UploadBox from "../components/UploadBox";
import Dashboard from "../components/Dashboard";

function Home() {
  const [analysis, setAnalysis] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        🚀 AI Resume Analyzer
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <Link to="/history">
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            📂 View Resume History
          </button>
        </Link>
      </div>

      <textarea
        placeholder="Paste the Job Description here (optional)..."
        rows={10}
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          fontSize: "16px",
          resize: "vertical",
        }}
      />

      <UploadBox
        setAnalysis={setAnalysis}
        jobDescription={jobDescription}
      />

      {analysis && (
        <div style={{ marginTop: "30px" }}>
          <Dashboard analysis={analysis} />
        </div>
      )}
    </div>
  );
}

export default Home;