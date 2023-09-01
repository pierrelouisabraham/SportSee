import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts';

const TodaysScoreRadarChart = (todayScoreData) => {
  const res = [{ score: todayScoreData }]
  console.log(todayScoreData)

  const RenderLegend = () => (
    <div className="score-container">
      <span className="score">{todayScoreData * 100}%</span>
      <p className="description">de votre objectif</p>
    </div>
  )

 

  return (
    <>
    <ResponsiveContainer height={263}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="80%"
        outerRadius="90%"
        barSize={15}
        data={res}
        startAngle={90}
        endAngle={450}
      >
        <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
        <RadialBar
          minAngle={15}
          clockWise
          dataKey="score"
          fill="red"
          cornerRadius={20}
        />
        <Legend
          width={120}
          height={120}
          layout="vertical"
          verticalAlign="middle"
          align="center"
          content={<RenderLegend />}
        />
      </RadialBarChart>
    </ResponsiveContainer>
    </>
  );
};

export default TodaysScoreRadarChart;