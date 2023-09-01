import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const SessionsEvolution = (data) => {

    console.log(data.data.data);

    
     
      return (
       
        <ResponsiveContainer  height={263}>
        <LineChart width={258} height={263} data={data.data.data.sessions} >
            <XAxis dataKey="day" label={{ value: 'Day', position: 'insideBottom', offset: -5 }} />
            <YAxis  />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sessionLength" name="Session Length" stroke="#8884d8" activeDot={{ r: 7 }} />
        </LineChart>
      </ResponsiveContainer>
  
  
      );
    };

export default SessionsEvolution;