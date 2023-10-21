import React from "react";
import ComboBox from "../ComboBox";
import Box from "@mui/material/Box";

const Input = ({ name, placeHolder, top100Films }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.7 }}>
      <Box sx={{ display: "flex", gap: 0.3 }}>
        <Box component="label">{name}</Box>
        <Box component="label" sx={{ color: "#005BA5" }}>
          *
        </Box>
      </Box>
      <ComboBox placeHolder={placeHolder} top100Films={top100Films} />
    </Box>
  );
};

export default Input;
