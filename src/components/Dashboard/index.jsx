import React from "react";

import './style.css';
import Lights from '../Lights';


const Dashboard = ({data}) => {
    return (
        <main className="dashboard">
            <Lights data={data}/>

        </main>

    );
  }

  export default Dashboard;

