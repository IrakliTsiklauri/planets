import ErrorPage from "./pages/ErrorPage";
import Planet from "./components/Planet";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/Mercury"} />}></Route>
      <Route path="/:name" element={<Planet />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
