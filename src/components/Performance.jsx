import React from "react";
import { Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


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
          <Radar data={radarData} dataKey="value" fill="#8884d8" />
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
        </ResponsiveContainer>
      );
    };

export default RadarChartPerformance;