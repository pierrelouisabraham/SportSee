import React from "react";
import { Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, RadarChart } from 'recharts';


const RadarChartPerformance = (data) => {

      return (
     
        <ResponsiveContainer width="80%" height={300}>
          <RadarChart data={data.data.data} >
            <PolarGrid />
         
          <PolarRadiusAxis />
            <PolarAngleAxis dataKey="kind" />
            <Radar  dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      );
    };

export default RadarChartPerformance;