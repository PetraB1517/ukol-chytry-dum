import React, { useState } from "react";

import './style.css';
import blindsOpen from './img/blinds-open.svg';
import blindsClosed from './img/blinds-closed.svg';



const Blinds = ({state}) => {
const [blindsState, setState] = useState(state);

    return (
        <div className="blinds">
				<div className="blinds__icon">
					<img src={blindsState == 'open' ? blindsOpen : blindsClosed}/>
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button className={blindsState == 'open' ? "button button--active" : "button"} onClick={() => setState('open')}>Otevřeno</button>
					<button className={blindsState == 'closed' ? "button button--active" : "button"} onClick={() => setState('closed')}>Zavřeno</button>
				</div>
			</div>

    );
  }

  export default Blinds;

