import GoalItem from "./GoalItem";

function GoalList({ goals, onUpdateGoal, onDeleteGoal }) {
  return (
    <div>
      {goals.map(goal => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onUpdateGoal={onUpdateGoal}
          onDeleteGoal={onDeleteGoal}
        />
      ))}
    </div>
  );
}

export default GoalList;