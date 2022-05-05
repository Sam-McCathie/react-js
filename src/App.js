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
import ClassComplexState from "./topics/classes/class-complex-state";
import ComponentDidMount from "./topics/classes/component-did-mount";
import ComponentDidUpdate from "./topics/classes/component-did-update";
import ComponentDidUnmount from "./topics/classes/component-did-unmount";
import Reusability from "./reusability/reusability";
import Children from "./reusability/children/children";
import HigherOrderComponents from "./reusability/children/higher-order-components";
import Basic from "./reusability/children/hoc/basic/basic";

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
        <Route path="/reusability" element={<Reusability />} />
        <Route path="/reusability/children" element={<Children />} />
        <Route
          path="/reusability/higher-order-components"
          element={<HigherOrderComponents />}
        />
        <Route
          path="/reusability/higher-order-components/basic"
          element={<Basic />}
        />
        <Route path="/event-listeners" element={<EventListeners />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/basics" element={<Basics />} />
        <Route
          path="/classes/functional-vs-class"
          element={<FunctionalVsClass message="I am a prop" />}
        />
        <Route path="/classes/state/new" element={<ClassStateNew />} />
        <Route path="/classes/state/old" element={<ClassStateOld />} />
        <Route path="/classes/state/complex" element={<ClassComplexState />} />
        <Route
          path="/classes/component-did-mount"
          element={<ComponentDidMount />}
        />
        <Route
          path="/classes/component-did-update"
          element={<ComponentDidUpdate />}
        />
        <Route
          path="/classes/component-did-unmount"
          element={<ComponentDidUnmount />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
