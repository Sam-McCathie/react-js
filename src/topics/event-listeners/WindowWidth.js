import React, {useState, useEffect} from "react";

export const WindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const watchWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", watchWidth);
    console.log("event listener added");

    // cleanup function for when componenet unmounts
    return function () {
      window.removeEventListener("resize", watchWidth);
      console.log("event listener removed");
    };
  }, []);

  return <p>Window width is currently: {windowWidth}</p>;
};
