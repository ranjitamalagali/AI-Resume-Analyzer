import ATSScore from "./ATSScore";
import SkillsCard from "./SkillsCard";
import { FaCheckCircle, FaLightbulb } from "react-icons/fa";
import JobMatch from "./JobMatch";
function Dashboard({ analysis }) {
  return (
    <div>

      <div
  style={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  }}
>
  <ATSScore score={analysis.ats_score} />

  <JobMatch score={analysis.job_match_score} />
</div>

      <div className="card">
        <h2>📄 Resume Summary</h2>
        <p>{analysis.summary}</p>
      </div>

      <SkillsCard
        title="💻 Technical Skills"
        skills={analysis.technical_skills}
      />

      <SkillsCard
        title="⚠️ Missing Skills"
        skills={analysis.missing_skills }
      />
      <SkillsCard
        title="✅ Matched Skills"
        skills={analysis.matched_skills || []}
      />
      <SkillsCard
        title="🔑 Missing Keywords"
        skills={analysis.missing_keywords || []}
      />

      <div className="card">
        <h2>💪 Strengths</h2>

        {(analysis.strengths || []).map((item, index) => (
          <p key={index}>
            <FaCheckCircle color="green" /> {item}
          </p>
        ))}
      </div>

      <div className="card">
        <h2>💡 Improvement Suggestions</h2>

        {(analysis.improvements || []).map((item, index) => (
          <p key={index}>
            <FaLightbulb color="orange" /> {item}
          </p>
        ))}
      </div>
      <div className="card">
        <h2>🎤 Interview Questions</h2>

        {(analysis.interview_questions || []).map((question, index) => (
        <p key={index}>
            {index + 1}. {question}
        </p>
        ))}
     </div>

    </div>
  );
}

export default Dashboard;