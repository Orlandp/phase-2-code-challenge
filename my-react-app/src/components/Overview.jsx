function Overview({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + Number(g.savedAmount), 0);
  const finished = goals.filter(
    (g) => Number(g.savedAmount) >= Number(g.targetAmount)
  ).length;
  const now = new Date();

  return (
    <div style={{ marginBottom: 18, borderBottom: "1px solid #ddd" }}>
      <p>
        <b>Goals:</b> {totalGoals} &nbsp; 
        <b>Total Saved:</b> ${totalSaved} &nbsp; 
        <b>Completed:</b> {finished}
      </p>
      <div>
        {goals.map((goal) => {
          const daysLeft = Math.ceil(
            (new Date(goal.deadline) - now) / (1000 * 60 * 60 * 24)
          );
          const complete = Number(goal.savedAmount) >= Number(goal.targetAmount);
          if (complete) return null;
          if (daysLeft < 0)
            return (
              <span key={goal.id} style={{ color: "red", marginLeft: 10 }}>
                {goal.name} is overdue!
              </span>
            );
          if (daysLeft <= 30)
            return (
              <span key={goal.id} style={{ color: "#c98a00", marginLeft: 10 }}>
                {goal.name}: {daysLeft} days left!
              </span>
            );
          return null;
        })}
      </div>
    </div>
  );
}

export default Overview;
