import React from "react";
import Links from "../components/Links";

const Home = () => {
  const links = [
    {to: "hooks", title: "Hooks"},
    {to: "conditional-rendering", title: "Conditional Rendering"},
    {to: "forms", title: "Forms"},
    {to: "api", title: "Api"},
    {to: "reusability", title: "Reusability"},
    {to: "event-listeners", title: "Event Listeners"},
    {to: "classes", title: "Classes"},
  ];

  return (
    <div>
      <h1>Topics</h1>
      <Links links={links} />
    </div>
  );
};

export default Home;
