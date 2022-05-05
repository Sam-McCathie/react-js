import React from "react";
import Links from "../components/Links";

const Reusability = () => {
  const links = [
    {
      to: "/reusability/children",
      title: "Children",
    },
    {
      to: "/reusability/higher-order-components",
      title: "Higher Order Components",
    },
  ];

  return (
    <div>
      <h1>Reusability</h1>
      <Links links={links} />
    </div>
  );
};

export default Reusability;
