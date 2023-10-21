import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ContextApp } from "../../context/Context";

export default function ComboBox({
  placeHolder,
  top100Films,
  setSelect,
  select,
}) {
  const { setVoto, voto, data } = React.useContext(ContextApp);
  const handleChange = (event, value) => {
    console.log("Cambio a", value);
    console.log(data);
    setVoto([...voto, value]);
  };
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={placeHolder} />}
      onChange={handleChange}
    />
  );
}
