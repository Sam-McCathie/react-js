import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import State from "./topics/state/State";
import Updating from "./topics/state/Updating";
import ConditionalRendering from "./topics/state/Conditional-Rendering";
import Form from "./topics/forms/Forms";
import Api from "./topics/Api/Api";
import EventListeners from "./topics/event-listeners/EventListeners";

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
        <Route path="/api" element={<Api />} />
        <Route path="/event-listeners" element={<EventListeners />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
