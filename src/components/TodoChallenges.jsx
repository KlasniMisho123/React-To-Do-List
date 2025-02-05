import React from "react";
import useTodoChallenges from "./customHooks/useTodoChallenges";

export default function TodoChallenges() {
  const { challenges, loading, fetchChallenges } = useTodoChallenges();

  return (
    <div className="todo-challenges">
      <h1>Todo Challenges</h1>
      <p>Here are some challenges for you to try!</p>

      {loading ? (
        <p>Loading challenges...</p>
      ) : (
        <ul className="challenge-list">
          {challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      )}

      <button onClick={fetchChallenges} disabled={loading}>
        {loading ? "Refreshing..." : "Get New Challenges"}
      </button>
    </div>
  );
}
