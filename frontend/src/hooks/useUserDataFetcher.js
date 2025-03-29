import { useEffect, useState } from "react";

const useUserDataFetcher = ({ userId, useMock, fetchFn, mockData, formatter = (d) => d }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let rawData;

        if (useMock) {
          rawData = Array.isArray(mockData)
            ? mockData.find((user) => user.userId === userId || user.id === userId)
            : mockData;

          if (!rawData) throw new Error("Mock: utilisateur non trouvé");
        } else {
          rawData = await fetchFn(userId);
        }

        const formatted = formatter(rawData);
        setData(formatted);
      } catch (err) {
        console.error("❌ useUserDataFetcher error :", err);
        setError("Impossible de récupérer les données");
      }
    };

    fetchData();
  }, [userId, useMock, fetchFn, mockData, formatter]);

  return { data, error };
};

export default useUserDataFetcher;
