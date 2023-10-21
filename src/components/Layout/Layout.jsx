import React, { useContext, useState } from "react";
import Header from "../Header";
import Input from "../Input";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ContextApp, Context as ContextHook } from "../../context/Context";

const Layout = () => {
  const { zonas, Programa, voto, setVoto, updateData } = useContext(ContextApp);

  const [selectedMesa, setSelectedMesa] = useState(null);
  const [selectedPuesto, setSelectedPuesto] = useState(null);
  const [selectedPrograma, setSelectedPrograma] = useState(null);

  return (
    <>
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
          <Input
            name={"Mesa"}
            placeHolder="32.."
            top100Films={zonas}
            select={selectedMesa}
            setSelect={setSelectedMesa}
          />
          <Input
            name={"Puesto"}
            placeHolder="12.."
            top100Films={zonas}
            select={selectedPuesto}
            setSelect={setSelectedPuesto}
          />
          <Input
            name={"Nombre del Programa"}
            placeHolder="Programa 1.."
            top100Films={Programa}
            select={selectedPrograma}
            setSelect={setSelectedPrograma}
          />
        </Box>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#005BA5", fontWeight: "bold" }}
          onClick={() => {
            js;
          }}
        >
          Votar
        </Button>
      </Box>
    </>
  );
};

export default Layout;
