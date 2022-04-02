import React from "react";

import './style.css';


const Light = ({title}) => {
    return (
        <div className="light">
            <div className="light__icon">
                <img src="./images/light-off.svg"></img>
            </div>
            <div className="light__name">
                Obývací pokoj
            </div>
		</div>

    );
  }

  export default Light;

