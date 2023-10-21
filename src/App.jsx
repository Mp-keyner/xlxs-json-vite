import React, { useContext } from "react";
import Layout from "./components/Layout/Layout";
import { Context as ContextHook } from "./context/Context";

function App() {
  return (
    <ContextHook>
      <Layout />
    </ContextHook>
  );
}

export default App;
