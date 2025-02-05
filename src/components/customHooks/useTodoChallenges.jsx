import { useState, useEffect } from "react";
import axios from "axios";

export default function useTodoChallenges() {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const accessToken = 'YOUR_ACCESS_TOKEN';

  useEffect(() => {
    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.activitylist.com/api/activities', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        params: {
        }
      });
      setChallenges(response.data.activities);
    } catch (error) {
      console.error("Error fetching challenges:", error);
    } finally {
      setLoading(false);
    }
  };

  return { challenges, loading, fetchChallenges };
}
