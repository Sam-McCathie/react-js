import React from "react";

// chilren can make components more re-usable
const CTA = (props) => {
  return (
    <div>
      <h1>{props.heading}</h1>
      {props.children}
    </div>
  );
};

const Children = () => {
  return (
    <div>
      <h1>Children example</h1>
      <CTA heading="Heading 1">
        <p>Something</p>
      </CTA>
      <CTA heading="Something else">
        <form>
          <input />
          <submit />
        </form>
      </CTA>
    </div>
  );
};

export default Children;
