import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import State from "./topics/state/State";
import Updating from "./topics/state/Updating";
import ConditionalRendering from "./topics/state/Conditional-Rendering";
import Form from "./topics/forms/Forms";

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

        <Route path="/forms" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
