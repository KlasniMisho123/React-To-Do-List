import { useState } from "react";

export default function useTodoChallenges() {
  const [challenges, setChallenges] = useState([]);
  const [input, setInput] = useState("");

  const addChallenge = () => {
    if (input.trim()) {
      setChallenges([...challenges, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index) => {
    const updatedChallenges = [...challenges];
    updatedChallenges[index].completed = !updatedChallenges[index].completed;
    setChallenges(updatedChallenges);
  };

  const removeChallenge = (index) => {
    setChallenges(challenges.filter((_, i) => i !== index));
  };

  return {
    challenges,
    input,
    setInput,
    addChallenge,
    toggleComplete,
    removeChallenge,
  };
}
