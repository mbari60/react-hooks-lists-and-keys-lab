import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, index) => (
        <li key={index}>
          <a href="#{link}">{link}</a>
        </li>
      ))}
    </nav>
  );
}

export default NavBar;
