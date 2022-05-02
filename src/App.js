import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import State from "./topics/state/State";
import Updating from "./topics/state/Updating";
import ConditionalRendering from "./topics/state/Conditional-Rendering";
import Form from "./topics/forms/Forms";
import Api from "./topics/Api/Api";
import EventListeners from "./topics/event-listeners/EventListeners";
import Classes from "./topics/classes/classes";
import Hooks from "./topics/hooks/hooks";
import UseReducer from "./topics/hooks/useReducer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/hooks/useReducer" element={<UseReducer />} />
        <Route path="/state" element={<State />} />
        <Route path="/state/updating" element={<Updating />} />
        <Route
          path="/state/conditional-rendering"
          element={<ConditionalRendering />}
        />
        <Route path="/forms" element={<Form />} />
        <Route path="/api" element={<Api />} />
        <Route path="/event-listeners" element={<EventListeners />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
