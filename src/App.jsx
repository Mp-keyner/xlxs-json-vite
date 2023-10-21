import Header from "./components/Header";
import Input from "./components/Input";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function App() {
  return (
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
        <Input name={"Mesa"} placeHolder="Cédula" />
        <Input name={"Puesto"} placeHolder="Nombre" />
        <Input name={"Nombre del Programa"} placeHolder="Programa" />
      </Box>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#005BA5", fontWeight: "bold" }}
      >
        Votar
      </Button>
    </Box>
  );
}

export default App;
