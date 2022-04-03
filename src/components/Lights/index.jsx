import React from "react";

import './style.css';
import Light from '../Light';


const Lights = ({data}) => {
    return (
        <div className="lights">
            {data.map (item => {  
                return (
                <Light 
                    key={item.name}
                    name={item.name} 
                    state={item.state} 
                />
            )})}

        </div>

    );
  }

  export default Lights;

