import React, { createContext, useState } from "react";
import useApi from "../hook/UseApi"; // Ajusta la ruta según tu estructura de carpetas

export const ContextApp = createContext();

export const Context = ({ children }) => {
  const apiUrl =
    "https://sheet.best/api/sheets/b2d45b17-a22f-4d5a-9000-cf81c37ffce9"; // Ajusta la URL de tu API
  const { data, loading, error, fetchData, updateData, zonas, Programa } =
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
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
