import React from "react";

export default function TodoChallenges() {
  const { challenges, input, setInput, addChallenge, toggleComplete, removeChallenge } = useTodoChallenges();

  return (
    <div className="todo-challenges">
      <h1>Todo Challenges</h1>
      <p>Add and track challenges to stay motivated!</p>

      <div className="todo-input">
        <input 
          type="text" 
          placeholder="Enter a challenge..." 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addChallenge()} 
        />
        <button onClick={addChallenge}>Add</button>
      </div>

      <ul className="challenge-list">
        {challenges.length === 0 && <p>No challenges yet. Start adding some!</p>}
        {challenges.map((challenge, index) => (
          <li key={index} className={challenge.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(index)}>{challenge.text}</span>
            <button onClick={() => removeChallenge(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
