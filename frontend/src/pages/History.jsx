import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import api from "../services/api";

function History() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/history")
      .then((response) => {
        setHistory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navbar />

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
            marginBottom: "30px",
          }}
        >
          📂 Resume History
        </h1>

        {history.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>
            No resume analyses found.
          </h3>
        ) : (
          history.map((resume) => (
            <div
              key={resume.id}
              style={{
                background: "#fff",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{resume.filename}</h3>

              <p>
                <strong>ATS Score:</strong> {resume.ats_score}%
              </p>

              <p>
                <strong>Job Match:</strong> {resume.job_match_score}%
              </p>

              <p>
                <strong>Uploaded:</strong>{" "}
                {new Date(resume.created_at).toLocaleString()}
              </p>

              <button
                onClick={() => navigate(`/analysis/${resume.id}`)}
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                View Analysis
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default History;