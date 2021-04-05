import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksList = links.map((item) => {
    return (
      <a href={"#" + item} key={item}>
        {item}
      </a>
    )
  })

  return <nav>{linksList}</nav>;
 
  
}

export default NavBar;
