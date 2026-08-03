import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";

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
      <>
        <Navbar />
        <h2
          style={{
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          Loading...
        </h2>
      </>
    );
  }

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <Link to="/history">
            <button
              style={{
                padding: "10px 20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              ← Back
            </button>
          </Link>

          <button
            onClick={() =>
              window.open(
                `http://127.0.0.1:8000/report/${id}`,
                "_blank"
              )
            }
            style={{
              padding: "10px 20px",
              background: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            📄 Download Report
          </button>
        </div>

        <h1
          style={{
            color: "#2563eb",
            marginBottom: "30px",
          }}
        >
          {analysis.filename}
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              background: "#eff6ff",
              padding: "25px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <h2>ATS Score</h2>

            <h1
              style={{
                color: "#2563eb",
                fontSize: "50px",
              }}
            >
              {analysis.ats_score}%
            </h1>
          </div>

          <div
            style={{
              background: "#ecfdf5",
              padding: "25px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <h2>Job Match</h2>

            <h1
              style={{
                color: "#16a34a",
                fontSize: "50px",
              }}
            >
              {analysis.job_match_score}%
            </h1>
          </div>
        </div>

        <Section title="📄 Resume Summary">
          <p>{analysis.summary}</p>
        </Section>

        <Section title="💻 Technical Skills">
          <Tags items={analysis.technical_skills} color="#2563eb" />
        </Section>

        <Section title="✅ Matched Skills">
          <Tags items={analysis.matched_skills} color="#16a34a" />
        </Section>

        <Section title="❌ Missing Skills">
          <Tags items={analysis.missing_skills} color="#dc2626" />
        </Section>

        <Section title="🔑 Missing Keywords">
          <Tags items={analysis.missing_keywords} color="#f59e0b" />
        </Section>

        <Section title="💪 Strengths">
          <List items={analysis.strengths} />
        </Section>

        <Section title="💡 Improvements">
          <List items={analysis.improvements} />
        </Section>

        <Section title="🎤 Interview Questions">
          <List items={analysis.interview_questions} />
        </Section>
      </div>
    </>
  );
}

function Section({ title, children }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          marginBottom: "15px",
          color: "#1e293b",
        }}
      >
        {title}
      </h2>

      {children}
    </div>
  );
}

function Tags({ items = [], color }) {
  return (
    <>
      {items.map((item, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            margin: "6px",
            padding: "8px 14px",
            background: color,
            color: "white",
            borderRadius: "20px",
          }}
        >
          {item}
        </span>
      ))}
    </>
  );
}

function List({ items = [] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          style={{
            marginBottom: "10px",
            lineHeight: "1.6",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Analysis;