import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import State from "./topics/state/State";
import Updating from "./topics/state/Updating";
import ConditionalRendering from "./topics/state/Conditional-Rendering";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/state" element={<State />} />
        <Route path="/state/updating" element={<Updating />} />
        <Route
          path="/state/conditional-rendering"
          element={<ConditionalRendering />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
