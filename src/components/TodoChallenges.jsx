import React from "react";
import useTodoChallenges from "./customHooks/useTodoChallenges"; 

const TodoChallenges = () => {
  const { challenges, loading, error } = useTodoChallenges();

  if (loading) {
    return <div>Loading challenges...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Todo Challenges</h2>
      <ul>
        {challenges.map((challenge, index) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoChallenges;
