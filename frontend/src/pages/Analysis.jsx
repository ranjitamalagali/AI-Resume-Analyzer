import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Analysis() {
  const { id } = useParams();

  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/history/${id}`)
      .then((response) => {
        setAnalysis(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!analysis) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Loading...
      </h2>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <Link to="/history">
        <button
          style={{
            marginBottom: "20px",
            padding: "10px 20px",
            border: "none",
            background: "#2563eb",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ← Back to History
        </button>
      </Link>

      <h1>{analysis.filename}</h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            background: "#e0f2fe",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h2>ATS Score</h2>
          <h1>{analysis.ats_score}%</h1>
        </div>

        <div
          style={{
            background: "#dcfce7",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h2>Job Match</h2>
          <h1>{analysis.job_match_score}%</h1>
        </div>
      </div>

      <div className="card">
        <h2>📄 Summary</h2>
        <p>{analysis.summary}</p>
      </div>

      <div className="card">
        <h2>💻 Technical Skills</h2>

        {(analysis.technical_skills || []).map((skill, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              margin: "6px",
              padding: "8px 14px",
              background: "#2563eb",
              color: "white",
              borderRadius: "20px",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="card">
        <h2>✅ Matched Skills</h2>

        {(analysis.matched_skills || []).map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </div>

      <div className="card">
        <h2>❌ Missing Skills</h2>

        {(analysis.missing_skills || []).map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </div>

      <div className="card">
        <h2>🔑 Missing Keywords</h2>

        {(analysis.missing_keywords || []).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>

      <div className="card">
        <h2>💪 Strengths</h2>

        {(analysis.strengths || []).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>

      <div className="card">
        <h2>💡 Improvements</h2>

        {(analysis.improvements || []).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>

      <div className="card">
        <h2>🎤 Interview Questions</h2>

        {(analysis.interview_questions || []).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
      <button>
  📄 Download PDF Report
</button>
    </div>
  );
}

export default Analysis;