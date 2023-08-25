import React from "react";
import { Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, RadarChart } from 'recharts';


const RadarChartPerformance = (data) => {

    console.log('Data:', data); // Check the data object here
    console.log('Data Kind:', data.data.kind[2]); // Check the kind property here
    console.log('Data Array:', data.data.data); // Check the data array here
  
    const radarData = data.data.data.map(item => {
        console.log('Item:', item);
        
        const kindValue = data.data.kind[parseInt(item.kind)];
        console.log('Kind Value:', kindValue);
        
        const transformedItem = {
          kind: kindValue,
          value: item.value.toString(),
        };
        console.log('Transformed Item:', transformedItem);
        
        return transformedItem;
      });
    
      console.log(radarData)
      return (
     
        <ResponsiveContainer width="80%" height={300}>
          <RadarChart data={radarData} >
            <PolarGrid />
         
          <PolarRadiusAxis />
            <PolarAngleAxis dataKey="kind" />
            <Radar  dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      );
    };

export default RadarChartPerformance;