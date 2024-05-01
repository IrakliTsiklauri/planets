import React from "react";
import Planet from "./components/Planet";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/Mercury"} />}></Route>
      <Route path="/:name" element={<Planet />}></Route>
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
}

export default App;
