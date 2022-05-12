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
import HigherOrderComponents from "./reusability/hoc/higher-order-components";
import Basic from "./reusability/hoc/basic-hoc/basic";
import UseCase from "./reusability/hoc/toggle-hoc-example/toggle-example";

function App() {
  const routes = [
    {slug: "/", component: <Home />},
    {slug: "hooks", component: <Hooks />},
    {slug: "hooks/useReducer", component: <UseReducer />},
    {slug: "hooks/useState", component: <UseState />},
    {slug: "conditional-rendering", component: <ConditionalRendering />},
    {slug: "forms", component: <Form />},
    {slug: "api", component: <Api />},
    {slug: "reusability", component: <Reusability />},
    {slug: "reusability/children", component: <Children />},
    {
      slug: "reusability/higher-order-components",
      component: <HigherOrderComponents />,
    },
    {slug: "reusability/higher-order-components/basic", component: <Basic />},
    {
      slug: "reusability/higher-order-components/toggle-example",
      component: <UseCase />,
    },
    {slug: "event-listeners", component: <EventListeners />},
    {slug: "classes", component: <Classes />},
    {slug: "classes/basics", component: <Basics />},
    {
      slug: "classes/functional-vs-class",
      component: <FunctionalVsClass message="I am a prop" />,
    },
    {slug: "classes/state/new", component: <ClassStateNew />},
    {slug: "classes/state/old", component: <ClassStateOld />},
    {slug: "classes/state/complex", component: <ClassComplexState />},
    {slug: "classes/component-did-mount", component: <ComponentDidMount />},
    {slug: "classes/component-did-update", component: <ComponentDidUpdate />},
    {slug: "classes/component-did-unmount", component: <ComponentDidUnmount />},
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.slug}
              path={route.slug}
              element={route.component}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
