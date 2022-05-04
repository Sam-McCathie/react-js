import React from "react";
import Links from "../../components/Links";

const Classes = () => {
  const links = [
    {to: "basics", title: "Class basics refresher"},
    {to: "functional-vs-class", title: "Functional vs Class Component"},
    {to: "state/new", title: "Class State (modern)"},
    {to: "state/old", title: "Class State (old)"},
    {to: "state/old", title: "Class State (old)"},
    {to: "state/complex", title: "Complex State"},
    {
      title: "Life Cycle methods",
      nested: [
        {to: "/classes/component-did-mount", title: "componentDidMount()"},
        {to: "/classes/component-did-update", title: "componentDidUpdate()"},
        {to: "/classes/component-did-unmount", title: "componentDidUnmount()"},
      ],
    },
  ];

  return (
    <div>
      <h1>Classes</h1>
      <Links links={links} />
    </div>
  );
};

export default Classes;
