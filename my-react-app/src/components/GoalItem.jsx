import ProgressBar from "./ProgressBar";

function GoalItem({ goal, onDeleteGoal }) {
  const percent = Math.min(100, (goal.savedAmount / goal.targetAmount) * 100);
  const now = new Date();
  const deadline = new Date(goal.deadline);
  const daysLeft = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
  const complete = Number(goal.savedAmount) >= Number(goal.targetAmount);
  const overdue = !complete && now > deadline;

  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: 7,
      margin: "10px 0",
      padding: "14px 16px"
    }}>
      <h3 style={{ marginBottom: 6 }}>
        {goal.name} {complete ? "✅" : overdue ? "❌" : ""}
      </h3>
      <div>Category: <b>{goal.category}</b></div>
      <div>Saved: <b>{goal.savedAmount}</b> / {goal.targetAmount}</div>
      <ProgressBar percent={percent} />
      <div>
        {overdue ? (
          <span style={{ color: "red" }}>Overdue!</span>
        ) : complete ? (
          <span style={{ color: "green" }}>Goal reached!</span>
        ) : daysLeft <= 30 ? (
          <span style={{ color: "#c98a00" }}>Deadline in {daysLeft} days!</span>
        ) : (
          <span>{daysLeft} days remaining</span>
        )}
      </div>
      <button onClick={() => onDeleteGoal(goal.id)} style={{ marginTop: 8 }}>Delete</button>
    </div>
  );
}

export default GoalItem;
