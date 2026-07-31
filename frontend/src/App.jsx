import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";
import Analysis from "./pages/Analysis";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/analysis/:id" element={<Analysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;