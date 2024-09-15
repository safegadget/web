import {  Routes, Route } from "react-router-dom";
import Index from "./Main/Landing_page/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      {/* Define additional routes here if needed */}
    </Routes>
  );
}

export default App;
