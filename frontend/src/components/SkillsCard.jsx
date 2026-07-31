function SkillsCard({ title, skills = [] }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <span
              key={index}
              style={{
                background: "#2563eb",
                color: "white",
                padding: "8px 14px",
                borderRadius: "20px"
              }}
            >
              {skill}
            </span>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default SkillsCard;