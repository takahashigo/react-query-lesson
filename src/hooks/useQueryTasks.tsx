import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Task } from '../types/types';

const getTasks = async () => {
  const {
    data: { data },
  } = await axios.get<{ data: Task[] }>('http://localhost:8055/items/tasks');
  return data;
};

export const useQueryTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: getTasks,
    // useQueryを使ったcomponentがアンマウントしてから指定秒数後にcacheを削除してくれる(gcのおかげで不要なメモリを開放してくれる)
    cacheTime: 10000,
    // いつまでをfleshなデータとして扱うか（staleになったら再度fetchしにいく）
    staleTime: 0,
  });
};
