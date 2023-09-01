import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import "../style/DailyExercices.css"

const ChartComponent = ({ data }) => {
   

    // Custom tick formatter for Y-axis that displays kilograms
    const formatKilogramsTick = (value) => `${value}`;
    const formatcalopriesTick = (value) => ``;
    const formatDayTick = (value) => '';
    return (   
        <div className='chart-container'> 
            <BarChart width={835} height={320} data={data.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" label={{ value: '', angle: -90, position: 'insideLeft' }} tickFormatter={formatcalopriesTick} />
                <YAxis yAxisId="right" label={{ value: '', angle: -90, position: 'insideRight' }} orientation="right" tickFormatter={formatKilogramsTick} />
                <Tooltip />
                <Legend align="right" verticalAlign="top" />
                <Bar yAxisId="left" dataKey="calories" name="Calories" fill="#E60000" />
                <Bar yAxisId="right" dataKey="kilogram" name="Kilograms" fill="#282D30" />
                <Label value="Chart Title" position="insideTopLeft" />
            </BarChart>
        </div> 
    );
}

export default ChartComponent;