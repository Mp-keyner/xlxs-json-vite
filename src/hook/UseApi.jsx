import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (initialUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [zonas, setZonas] = useState([]);
  const [Programa, setPrograma] = useState([]);
  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateData = async (url, newData) => {
    try {
      const response = await axios.put(url, newData);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(initialUrl);
  }, [initialUrl]);

  useEffect(() => {
    if (!loading && data) {
      setZonas(data.map((item) => item.zona));
      setPrograma(data.map((item) => item.nom_prog));
    } else {
      setZonas([]);
      setPrograma([]);
    }
  }, [loading, data]);

  return { data, loading, error, fetchData, updateData, zonas, Programa };
};

export default useApi;
