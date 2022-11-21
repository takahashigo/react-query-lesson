import { useState, useEffect } from 'react';
import { useStateContext } from '../context/StateProvider';
import axios from 'axios';
import { Task } from '../types/types';

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const res = await axios.get<{ data: Task[] }>(
          'http://localhost:8055/items/tasks'
        );
        setTasks(res.data.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [setTasks]);

  return { tasks, isLoading, isError };
};
