import { Link } from "react-router-dom";
import {
  FaRobot,
  FaChartLine,
  FaFileAlt,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

import Navbar from "../components/Navbar";

function Landing() {
  const features = [
    {
      icon: <FaChartLine size={40} color="#2563eb" />,
      title: "ATS Score",
      description:
        "Analyze your resume using AI and receive an accurate ATS compatibility score.",
    },
    {
      icon: <FaBriefcase size={40} color="#16a34a" />,
      title: "Job Match",
      description:
        "Compare your resume with any job description and calculate your match percentage.",
    },
    {
      icon: <FaRobot size={40} color="#f59e0b" />,
      title: "AI Suggestions",
      description:
        "Receive personalized recommendations to improve your resume and stand out.",
    },
    {
      icon: <FaFileAlt size={40} color="#dc2626" />,
      title: "Interview Questions",
      description:
        "Generate technical and HR interview questions tailored to your resume.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg,#2563eb,#1e3a8a)",
          color: "white",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            marginBottom: "20px",
          }}
        >
          🚀 AI Resume Analyzer
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Build a stronger resume with AI. Analyze your resume, compare it with
          job descriptions, improve your ATS score, generate interview
          questions, and download professional reports.
        </p>

        <Link to="/home">
          <button
            style={{
              marginTop: "40px",
              padding: "16px 35px",
              fontSize: "18px",
              fontWeight: "bold",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              background: "white",
              color: "#2563eb",
            }}
          >
            Get Started →
          </button>
        </Link>
      </section>

      {/* Features */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "70px auto",
          padding: "20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
            color: "#1e293b",
          }}
        >
          Powerful AI Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                background: "#ffffff",
                padding: "30px",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              }}
            >
              {feature.icon}

              <h3
                style={{
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.6",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        style={{
          background: "#f8fafc",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Why Choose AI Resume Analyzer?
          </h2>

          {[
            "AI-powered ATS Score",
            "Resume vs Job Description Matching",
            "Technical Skill Gap Analysis",
            "Missing Keyword Detection",
            "Interview Question Generator",
            "Download Professional PDF Reports",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "18px",
                fontSize: "18px",
              }}
            >
              <FaCheckCircle
                color="#16a34a"
                style={{ marginRight: "12px" }}
              />

              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section
        style={{
          textAlign: "center",
          padding: "70px 20px",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Ready to Improve Your Resume?
        </h2>

        <p
          style={{
            color: "#64748b",
            marginBottom: "30px",
          }}
        >
          Upload your resume and receive AI-powered feedback in seconds.
        </p>

        <Link to="/home">
          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "15px 35px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Analyze Resume
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#1e293b",
          color: "white",
          textAlign: "center",
          padding: "30px",
        }}
      >
        <h3>AI Resume Analyzer</h3>

        <p
          style={{
            color: "#cbd5e1",
          }}
        >
          Built with React • FastAPI • Google Gemini AI • MySQL
        </p>

        <p
          style={{
            marginTop: "10px",
            color: "#94a3b8",
          }}
        >
          © 2026 AI Resume Analyzer. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Landing;