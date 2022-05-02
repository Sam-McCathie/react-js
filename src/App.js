import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ConditionalRendering from "./topics/conditional-rendering/Conditional-Rendering";
import Form from "./topics/forms/Forms";
import Api from "./topics/Api/Api";
import EventListeners from "./topics/event-listeners/EventListeners";
import Classes from "./topics/classes/classes";
import Hooks from "./topics/hooks/hooks";
import UseReducer from "./topics/hooks/useReducer";
import UseState from "./topics/hooks/useState";
import Basics from "./topics/classes/basics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/hooks/useReducer" element={<UseReducer />} />
        <Route path="/hooks/useState" element={<UseState />} />
        <Route
          path="/conditional-rendering"
          element={<ConditionalRendering />}
        />
        <Route path="/forms" element={<Form />} />
        <Route path="/api" element={<Api />} />
        <Route path="/event-listeners" element={<EventListeners />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/basics" element={<Basics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
