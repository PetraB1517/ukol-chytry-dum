import React, { useState } from "react";

import './style.css';

import lightOff from './img/light-off.svg';
import lightOn from './img/light-on.svg';


const Light = ({name,state},{key}) => {
    const[stateNow,setState] = useState(state);

    const prepni = () => {
        if (stateNow == 'on') setState('off');
        else setState('on');
            
    }

    return (
        <div className="light" onClick={()=>prepni()}>
            <div className="light__icon">
                <img src={stateNow== 'on' ? lightOn : lightOff}></img>
            </div>
            <div className="light__name">
                {name}
            </div>
		</div>

    );
  }

  export default Light;

