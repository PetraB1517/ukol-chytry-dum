import React from "react";

import './style.css';


const Header = ({title}) => {
    return (
        <header className="header">
		  	<h1 class="header__title">{title}</h1>
        </header>

    );
  }

  export default Header;

