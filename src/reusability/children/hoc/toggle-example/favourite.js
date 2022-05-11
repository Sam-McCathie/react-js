import React from "react";
import {withToggler} from "./withToggler";

// toggle an on are props from withToggler
const Favourite = ({toggle, show}) => {
  //  replaces below code
  //   const [isFavorited, setIsFavourited] = useState(false);

  //   const toggleFavorite = () => {
  //     setIsFavourited(!isFavorited);
  //   };

  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={toggle}>{show ? "❤️" : "♡"}</span>
      </h1>
    </div>
  );
};

export default withToggler(Favourite, {defaultShowValue: false});
