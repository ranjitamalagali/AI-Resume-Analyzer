import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";
import Dashboard from "../components/Dashboard";

function Home() {
  const [analysis, setAnalysis] = useState(null);

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1100px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              color: "#2563eb",
              marginBottom: "10px",
            }}
          >
            🚀 AI Resume Analyzer
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px",
              maxWidth: "750px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            Upload your resume, paste a job description, and let AI analyze
            your ATS score, job match, missing skills, interview questions,
            and improvement suggestions.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          <Link to="/history">
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              📂 View History
            </button>
          </Link>

          <Link to="/">
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "#16a34a",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              🏠 Landing Page
            </button>
          </Link>
        </div>

        {/* Upload Card */}
        <div
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >
          <UploadBox setAnalysis={setAnalysis} />
        </div>

        {/* Dashboard */}
        {analysis && (
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <Dashboard analysis={analysis} />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;