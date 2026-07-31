import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ATSScore({ score }) {
  return (
    <div style={{ width: 180, margin: "30px auto" }}>
      <CircularProgressbar
        value={score}
        text={`${score}%`}
      />

      <h2 style={{ textAlign: "center", marginTop: 20 }}>
        ATS Score
      </h2>
    </div>
  );
}

export default ATSScore;