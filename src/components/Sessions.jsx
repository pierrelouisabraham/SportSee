import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip, Rectangle } from 'recharts';

const SessionsEvolution = ({ data }) => {

    console.log(data);
    
    const CustomCursor = ({ points }) => {
      return (
        <Rectangle
          fill="#000000"
          opacity={0.2}
          x={points[1].x}
          width={1000}
          height={700}
        />
      );
    };

    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        const sessionLength = payload[0].payload.sessionLength;
        return (
          <div className="custom-tooltip" style={{
            backgroundColor: '#FFFFFF',
            color: '#000000',
            fontSize: '8px',
            fontWeight: '500',
            textAlign: 'center',
            lineHeight: '24px',
            fontStyle: 'normal',
            width: '39px',
            height: '25px',
            borderColor: 'transparent',
          }}>
            <p>{sessionLength}</p>
          </div>
        );
      }
  
      return null;
    };

      return (
       <div className="line-chart">
        <span className="title-linear">Durée moyenne des sessions</span>
        <ResponsiveContainer  height={263}>
          <LineChart         width={500}
        height={300}
        
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }} data={data.data} >
            <XAxis dataKey="day"         
          axisLine={false}
          tickLine={false}  
          tick={{ fill: 'white', fontSize: '12px' }}
          tickMargin={0}/>
            <YAxis  hide={true} padding={{ top: 80, bottom: 40 }}/>
            <Tooltip  cursor={<CustomCursor />} content={<CustomTooltip />}  />
            <Legend />
            
            <Line           type="natural"
          dataKey="sessionLength"
          dot={false}
          stroke="#FFFFFF"
          strokeWidth={2}
          activeDot={{ r: 4 }}
          legendType="none" />
          </LineChart>
        </ResponsiveContainer>
      </div>
  
      );
    };

export default SessionsEvolution;