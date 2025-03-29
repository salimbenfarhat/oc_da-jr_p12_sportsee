// hooks/useUsersFetcher.js
import { useEffect, useState } from 'react';

const useUsersFetcher = ({ userIds, useMock, fetchFn, formatter = (d) => d }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const promises = userIds.map(id => fetchFn(id));
        const results = await Promise.all(promises);
        const formatted = results.map(formatter);
        setUsers(formatted);
      } catch (err) {
        console.error('❌ useUsersFetcher error:', err);
        setError('Erreur lors de la récupération des utilisateurs');
      }
    };

    fetchAll();
  }, [userIds, useMock, fetchFn, formatter]);

  return { users, error };
};

export default useUsersFetcher;
