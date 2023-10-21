import React, { useContext, useState } from "react";
// import ComboBox from "../ComboBox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ContextApp, Context as ContextHook } from "../../context/Context";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const Form = () => {
  const Holis = styled("img")({
    width: "305px",
    marginTop: "5px",
    marginBottom: "5px",
    objectFit: "cover",
    objectPosition: "center",
  });
  const { zonas, Programa, lider, votante, voto, setVoto, updateData, data } =
    useContext(ContextApp);
  const apiUrl =
    "https://sheet.best/api/sheets/b2d45b17-a22f-4d5a-9000-cf81c37ffce9"; // Ajusta la URL de tu API
  const [selectedMesa, setSelectedMesa] = useState(null);
  const [selectedPuesto, setSelectedPuesto] = useState(null);
  const [selectedPrograma, setSelectedPrograma] = useState(null);
  const [optionSelect, setOptionSelect] = useState({});
  const UrlMap =
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/mapaColombia.svg?alt=media&token=396a3e9a-1fbc-4410-a237-c3cc86af15e9";
  const handleChange = (evento, value, nameSelect) => {
    console.log("Cambio y ahora es: " + value);
    console.log(evento);
    console.log(value);
    console.log(nameSelect);
    setOptionSelect((prevState) => ({
      ...prevState,
      [nameSelect]: value,
      Voto: "SI",
    }));
  };
  console.log(optionSelect);
  const handleVotarClick = () => {
    const nombre = optionSelect.nombre;
    console.log("Click en el btn");
    if (nombre) {
      // Buscar la posición del objeto en el arreglo `data` basándote en el nombre
      const indice = data.findIndex((item) => item.nombre === nombre);

      if (indice !== -1) {
        // Objeto encontrado, puedes acceder a él utilizando data[indice]
        const objetoAActualizar = data[indice];

        // Actualizar los valores del objeto encontrado con los nuevos valores
        const objetoActualizado = {
          ...objetoAActualizar,
          Sector: optionSelect.Sector,
          Zona: optionSelect.Zona,
          Programa: optionSelect.Programa,
          lider: optionSelect.lider,
          Votante: optionSelect.Votante,
          Voto: "SI",
        };

        // Actualizar tus datos con el objeto actualizado
        const datosActualizados = [...data];
        datosActualizados[indice] = objetoActualizado;

        // Llamar a la función para actualizar la hoja de cálculo
        updateData(`${apiUrl}/${indice}`, objetoActualizado)
          .then(() => {
            // Recargar la página después de que la actualización esté completa
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error al actualizar datos:", error);
          });
      } else {
        console.error(`No se encontró el objeto con el nombre: ${nombre}`);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1.5pc",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "9pc",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              border: "2px dashed #005BA5",
              display: "flex",
              flexDirection: "column",
              gap: 3.4,
              width: "21pc",
              borderRadius: 2,
              justifyContent: "center",
              px: 1.5,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.7,
                alignItems: "center",
              }}
            >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={zonas}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        Sector{" "}
                        <span
                          style={{ color: "blue", fontSize: 22, height: 11 }}
                        >
                          *
                        </span>
                      </span>
                    }
                  />
                )}
                onChange={(e, value) => handleChange(e, value, "Sector")}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.7,
                alignItems: "center",
              }}
            >
              <Autocomplete
                disablePortal
                id=""
                options={zonas}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        Zona{" "}
                        <span
                          style={{ color: "blue", fontSize: 22, height: 11 }}
                        >
                          *
                        </span>
                      </span>
                    }
                  />
                )}
                onChange={(e, value) => handleChange(e, value, "zona")}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.7,
                alignItems: "center",
              }}
            >
              <Autocomplete
                disablePortal
                id="Programa"
                options={Programa}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        Programa{" "}
                        <span
                          style={{ color: "blue", fontSize: 22, height: 11 }}
                        >
                          *
                        </span>
                      </span>
                    }
                  />
                )}
                onChange={(e, value) => handleChange(e, value, "nom_prog")}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.7,
                alignItems: "center",
              }}
            >
              <Autocomplete
                disablePortal
                id="Lider"
                options={lider}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        Lider{" "}
                        <span
                          style={{ color: "blue", fontSize: 22, height: 11 }}
                        >
                          *
                        </span>
                      </span>
                    }
                  />
                )}
                onChange={(e, value) => handleChange(e, value, "nom_lider")}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.7,
                alignItems: "center",
              }}
            >
              <Autocomplete
                disablePortal
                id="Votante"
                options={votante}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        Votante{" "}
                        <span
                          style={{ color: "blue", fontSize: 22, height: 11 }}
                        >
                          *
                        </span>
                      </span>
                    }
                  />
                )}
                onChange={(e, value) => handleChange(e, value, "nombre")}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            border: "2px dashed #005BA5",
            display: {xs: 'none', sm: 'none', md: 'none', lg: "flex", xl: "flex"},
            flexDirection: "column",
            gap: 3.4,
            width: "21pc",
            borderRadius: 2,
            justifyContent: "center",
            px: 1.5,
            py: 2,
            height: "26.7pc",
          }}
        >
          <Holis
            src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/mapaColombia.svg?alt=media&token=396a3e9a-1fbc-4410-a237-c3cc86af15e9"
            alt="dsf"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "#005BA5", fontWeight: "bold", width: "20pc" }}
          onClick={() => handleVotarClick()}
        >
          Votar
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
