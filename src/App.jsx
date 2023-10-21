import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Context, ContextApp } from "./context/Context";

function App() {
  const Context = React.useContext(ContextApp);
  console.log(Context);
  const top100Films = [
    { label: "Monty Python and the Holy Grail", year: 1975 },
  ];
  return (
    <Context>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Header />
        <Box
          sx={{
            border: "2px dashed #005BA5",
            display: "flex",
            flexDirection: "column",
            gap: 3.4,
            width: "85vw",
            borderRadius: 2,
            px: 1.5,
            py: 2,
          }}
        >
          <Input name={"Mesa"} placeHolder="Cédula" top100Films={top100Films} />
          <Input
            name={"Puesto"}
            placeHolder="Nombre"
            top100Films={top100Films}
          />
          <Input
            name={"Nombre del Programa"}
            placeHolder="Programa"
            top100Films={top100Films}
          />
        </Box>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#005BA5", fontWeight: "bold" }}
        >
          Votar
        </Button>
      </Box>
    </Context>
  );
}

export default App;
