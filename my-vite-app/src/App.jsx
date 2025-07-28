import React, { useEffect, useState } from "react";
import Overview from "./components/Overview";
import AddGoalForm from "./components/AddGoalForm";
import DepositForm from "./components/DepositForm";
import GoalList from "./components/GoalList";
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);

  // Fetch all goals when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((response) => response.json())
      .then((data) => setGoals(data));
  }, []);

  // Create a new goal
  function addGoal(goal) {
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(goal)
    })
      .then((res) => res.json())
      .then((newGoal) => setGoals((prevGoals) => [...prevGoals, newGoal]));
  }

  // Update goal (for edit or deposit)
  function updateGoal(id, updates) {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates)
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals((prevGoals) =>
          prevGoals.map((goal) =>
            goal.id === id ? { ...goal, ...updatedGoal } : goal
          )
        );
      });
  }

  // Remove a goal
  function deleteGoal(id) {
    fetch(`http://localhost:3000/goals/${id}`, { method: "DELETE" }).then(() => {
      setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
    });
  }

  // Handle depositing money to a goal
  function handleDeposit(goalId, amount) {
    const goal = goals.find((g) => g.id === goalId);
    if (!goal) return;
    updateGoal(goalId, { savedAmount: Number(goal.savedAmount) + Number(amount) });
  }

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
      <h1 style={{ textAlign: "center" }}>Smart Goal Planner</h1>
      <Overview goals={goals} />
      <AddGoalForm onAddGoal={addGoal} />
      <DepositForm goals={goals} onDeposit={handleDeposit} />
      <GoalList
        goals={goals}
        onUpdateGoal={updateGoal}
        onDeleteGoal={deleteGoal}
      />
    </div>
  );
}

export default App;