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
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Upload your resume, compare it with a job description,
            receive an ATS score, AI-powered suggestions,
            interview questions, and download a professional report.
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
                padding: "12px 25px",
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
                padding: "12px 25px",
                backgroundColor: "#16a34a",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              🏠 Home
            </button>
          </Link>
        </div>

        {/* Upload Section */}
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

        {/* Analysis Dashboard */}
        {analysis && (
          <div
            style={{
              marginTop: "40px",
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