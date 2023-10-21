import React, { useContext, useState } from "react";
import Header from "../Header";
import Form from "../Form/Form";
import Box from "@mui/material/Box";



const Layout = () => {


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
        <Box>
         <Form/>
        </Box>
       
      </Box>
    </>
  );
};

export default Layout;
