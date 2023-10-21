https://www.figma.com/file/ZPEZH8kGckSuKbhiIAjpmc/Untitled?type=design&node-id=0%3A1&mode=design&t=ZFRzYwCXkSKGR7OV-1

import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const YourComponent = () => {
const [data, setData] = useState([
// Tu arreglo de datos aquí...
]);

const [selectedMesa, setSelectedMesa] = useState(null);
const [selectedPuesto, setSelectedPuesto] = useState(null);
const [selectedPrograma, setSelectedPrograma] = useState(null);

const handleAutocompleteChange = (setter, selectedValue) => {
setter(selectedValue);
};

const handleUpdateButtonClick = () => {
if (selectedMesa !== null && selectedPuesto !== null && selectedPrograma !== null) {
const selectedIndex = data.findIndex(
(item) => item.mesa === selectedMesa && item.puesto === selectedPuesto && item.nom_prog === selectedPrograma
);

      if (selectedIndex !== -1) {
        const updatedData = [...data];
        updatedData[selectedIndex] = {
          ...updatedData[selectedIndex],
          // Actualiza las propiedades que desees aquí...
          registro: "SI",
        };

        setData(updatedData);
      }
    }

};

return (
<div>
<Autocomplete
id="mesa-autocomplete"
options={data.map((item) => item.mesa)}
sx={{ width: 300 }}
renderInput={(params) => <TextField {...params} label="Mesa" />}
onChange={(event, value) => handleAutocompleteChange(setSelectedMesa, value)}
/>
<Autocomplete
id="puesto-autocomplete"
options={data.map((item) => item.puesto)}
sx={{ width: 300 }}
renderInput={(params) => <TextField {...params} label="Puesto" />}
onChange={(event, value) => handleAutocompleteChange(setSelectedPuesto, value)}
/>
<Autocomplete
id="programa-autocomplete"
options={data.map((item) => item.nom_prog)}
sx={{ width: 300 }}
renderInput={(params) => <TextField {...params} label="Programa" />}
onChange={(event, value) => handleAutocompleteChange(setSelectedPrograma, value)}
/>
<Button variant="contained" onClick={handleUpdateButtonClick}>
Actualizar
</Button>
{/_ Renderiza otros componentes o muestra los datos actualizados _/}
{data.map((item) => (
<div key={item.cedula}>
{item.nombre} - {item.registro}
</div>
))}
</div>
);
};

export default YourComponent;
