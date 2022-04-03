import React from "react";

import './style.css';
import Lights from '../Lights';
import Climate from "../Climate";
import Energy from '../Energy';
import Blinds from '../Blinds';


const Dashboard = ({data}) => {
    return (
        <main className="dashboard">
            <Lights data={data.lights}/>
            <Climate temperature={data.climate.temperature} humidity={data.climate.humidity}/>
            <Blinds state={data.blinds} />
            <Energy water={data.energyConsumption.water} electricity={data.energyConsumption.electricity}/>



        </main>

    );
  }

  export default Dashboard;

