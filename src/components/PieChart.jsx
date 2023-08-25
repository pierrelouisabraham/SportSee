import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const TodaysScoreRadarChart = ({ todayScore }) => {
  const data = [
    { category: 'Today Score', value: todayScore },
  ];

  const chartSize = 258;

  return (
    <RadarChart cx={chartSize} cy={chartSize} outerRadius={chartSize} width={chartSize * 2} height={chartSize * 2} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="category" />
      <Radar name="Today's Score" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <text x={chartSize} y={chartSize} textAnchor="middle" dominantBaseline="central" style={{ fontSize: '20px' }}>
        {`${(todayScore * 100).toFixed(2)}%`}
      </text>
    </RadarChart>
  );
};

export default TodaysScoreRadarChart;