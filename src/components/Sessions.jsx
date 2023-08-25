import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const SessionsEvolution = (data) => {

    console.log(data.data.data);

    
     
      return (
       
        <ResponsiveContainer width="33%" height="33%">
        <LineChart width={258} height={263} data={data.data.data.sessions} background="#FF0000">
            <XAxis dataKey="day" label={{ value: 'Day', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Session Length', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sessionLength" name="Session Length" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
  
  
      );
    };

export default SessionsEvolution;