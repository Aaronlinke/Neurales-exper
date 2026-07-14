import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Observatory } from "@/components/observatory/Observatory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Observatory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
