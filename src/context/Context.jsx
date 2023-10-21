import React, { createContext, useState } from "react";
import useApi from "../hook/UseApi"; // Ajusta la ruta según tu estructura de carpetas

export const ContextApp = createContext();

export const Context = ({ children }) => {
  
    const apiUrl = 'https://sheet.best/api/sheets/8e9024c3-2b45-46fd-9e58-1df3a1c335bf'
  const { data, loading, error, fetchData, updateData, zonas, Programa, lider, votante } =
    useApi(apiUrl);
  const [voto, setVoto] = useState(["keyner voto"]);
  console.log(voto, "valro del vot");
  return (
    <ContextApp.Provider
      value={{
        data,
        loading,
        error,
        fetchData,
        updateData,
        zonas,
        Programa,
        voto,
        setVoto,
        lider,
        votante,
        apiUrl
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
