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
import FunctionalVsClass from "./topics/classes/functional-vs-class";
import ClassStateNew from "./topics/classes/class-state-new";
import ClassStateOld from "./topics/classes/class-state-old";

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
        <Route
          path="/classes/functional-vs-class"
          element={<FunctionalVsClass message="I am a prop" />}
        />
        <Route path="/classes/state/new" element={<ClassStateNew />} />
        <Route path="/classes/state/old" element={<ClassStateOld />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
