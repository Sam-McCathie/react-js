import React from "react";
import {Link} from "react-router-dom";

const Links = ({links}) => {
  return (
    <ul>
      {links.map((link) => {
        return (
          <>
            {!link.nested ? (
              <li key={link.to}>
                <Link to={link.to}>{link.title}</Link>
              </li>
            ) : (
              <>
                <li key={link.to}>{link.title}</li>
                <ul>
                  {link.nested.map((link) => {
                    return (
                      <li key={link.to}>
                        <Link to={link.to}>{link.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </>
        );
      })}
    </ul>
  );
};

export default Links;
