import React, { useState } from "react";

import './style.css';
import tempPic from './img/temp.svg';


const Climate = ({temperature, humidity}) => {
    const [temp, setTemp]=useState(temperature);

    const nastavTeplotu= (sign) => {
        sign == '+' ? setTemp(temp+1) : setTemp(temp-1);
    }

    return (
        <div className="climate">
        <div className="climate__icon">
            <img src={tempPic}/>
        </div>
        <div className="climate__content">
            <div className="climate__temperature">{temp}&deg;C</div>
            <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
        </div>
        <div className="climate__controls">
            <button className="button" onClick={()=> nastavTeplotu('+')}>+</button>
            <button className="button"  onClick={()=> nastavTeplotu('-')}>-</button>
        </div>
    </div>

    );
  }

  export default Climate;

