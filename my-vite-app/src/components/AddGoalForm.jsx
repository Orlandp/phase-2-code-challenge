import React, { useState } from "react";

function AddGoalForm({ onAddGoal }) {
  const [input, setInput] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: ""
  });

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.name || !input.targetAmount || !input.deadline) return;
    onAddGoal({
      ...input,
      savedAmount: 0,
      createdAt: new Date().toISOString().split("T")[0]
    });
    setInput({ name: "", targetAmount: "", category: "", deadline: "" });
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "18px 0" }}>
      <input
        name="name"
        placeholder="Goal name"
        value={input.name}
        onChange={handleChange}
        required
      />
      <input
        name="targetAmount"
        type="number"
        placeholder="Target Amount"
        value={input.targetAmount}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={input.category}
        onChange={handleChange}
      />
      <input
        name="deadline"
        type="date"
        value={input.deadline}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoalForm;