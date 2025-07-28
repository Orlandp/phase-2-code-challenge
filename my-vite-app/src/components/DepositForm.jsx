import React, { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!goalId || !amount) return;
    onDeposit(goalId, amount);
    setGoalId("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "18px 0" }}>
      <select value={goalId} onChange={e => setGoalId(e.target.value)}>
        <option value="">Choose a goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Amount to add"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;