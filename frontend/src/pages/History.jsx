import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/history")
      .then((response) => {
        setHistory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching history:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "30px",
        }}
      >
        📂 Resume Analysis History
      </h1>

      <div style={{ marginBottom: "25px" }}>
        <Link to="/">
          <button
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            ← Back to Home
          </button>
        </Link>
      </div>

      {loading ? (
        <h3 style={{ textAlign: "center" }}>Loading...</h3>
      ) : history.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>
          No Resume Analyses Found
        </h3>
      ) : (
        history.map((resume) => (
          <div
            key={resume.id}
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "20px",
              boxShadow: "0px 3px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{resume.filename}</h2>

            <p>
              <strong>ATS Score:</strong>{" "}
              <span style={{ color: "green" }}>
                {resume.ats_score}%
              </span>
            </p>

            <p>
              <strong>Job Match:</strong>{" "}
              <span style={{ color: "#2563eb" }}>
                {resume.job_match_score}%
              </span>
            </p>

            <p>
              <strong>Uploaded:</strong>{" "}
              {new Date(resume.created_at).toLocaleString()}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px",
              }}
            >
              <Link to={`/analysis/${resume.id}`}>
                <button
                  style={{
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  👁 View Analysis
                </button>
              </Link>

              <button
                style={{
                  backgroundColor: "#dc2626",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default History;