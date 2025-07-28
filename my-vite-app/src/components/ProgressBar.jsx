function ProgressBar({ percent }) {
  return (
    <div style={{
      background: "#eee",
      borderRadius: 8,
      height: 14,
      margin: "7px 0",
      overflow: "hidden"
    }}>
      <div style={{
        width: percent + "%",
        background: percent >= 100 ? "#4caf50" : "#1976d2",
        height: "100%",
        transition: "width 0.5s"
      }} />
    </div>
  );
}

export default ProgressBar;