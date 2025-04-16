import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import App1 from "./routes/app1";
import App2 from "./routes/app2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app1" element={<App1 />} />
      <Route path="/app2" element={<App2 />} />
    </Routes>
  );
}

export default App;
