import React from "react";
import { Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, RadarChart } from 'recharts';


const RadarChartPerformance = (data) => {

      return (
        <div className="radar-container">
        <ResponsiveContainer width="100%" height={300}>
                <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data.data.data}
        startAngle={90}
        endAngle={-270}
      > 
             <PolarGrid radialLines={false} />
             <PolarAngleAxis
          dataKey="kind"
        
          tick={{ fill: 'white', fontSize: '12px' }}
        />
            <PolarAngleAxis dataKey="kind" />
            <Radar  dataKey="value"   stroke="rgba(255, 1, 1, 0.7)"
          fill="rgba(255, 1, 1, 0.7)" />
          </RadarChart>
        </ResponsiveContainer>
        </div>
      );
    };

export default RadarChartPerformance;