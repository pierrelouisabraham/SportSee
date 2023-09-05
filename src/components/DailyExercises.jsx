import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts';


const ChartComponent = ({ data }) => {

    const formatKilogramsTick = (value) => `${value}`;
    const formatcalopriesTick = (value) => ``;
   
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div
              className="custom-tooltip"
              style={{
                backgroundColor: '#E60000',
                color: '#FFFFFF',
                fontSize: '7px',
                fontWeight: '500',
                textAlign: 'center',
                lineHeight: '24px',
                fontStyle: 'normal',
                width: '39px',
                height: '63px',
              }}
            >
              <p className="label">{`${payload[0].value}Kg`}</p>
              <p className="label">{`${payload[1].value}Kcal`}</p>
            </div>
          )
        }
    
        return null
      }
    
    return (   
        <div className='chart-container'>
            <ResponsiveContainer>
                <BarChart width={835} height={320} data={data.data}         
                margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                   }}
                   barGap={10}
                   barSize={7}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
                 <XAxis dataKey="day" />
                 <YAxis yAxisId="left"  tickFormatter={formatcalopriesTick} axisLine={false} tick={false}/>
                 <YAxis yAxisId="right" label={{ value: '', angle: -90, position: 'insideRight' }} orientation="right" tickFormatter={formatKilogramsTick} axisLine={false} />
                 <Tooltip  content={<CustomTooltip />}
                    wrapperStyle={{ outline: 'none' }}/>
                 <Legend align="right" verticalAlign="top"           
                     iconType="circle"
                    iconSize={8}
                    height={50}
                    wrapperStyle={{
                        paddingBottom: '30px',
                        color: 'blue', 
                    }} 
                    formatter={(value) => {
                        
                        if (value === 'Calories') {
                            return 'Calories brûlées (kCal)';
                        } else if (value === 'Kilograms') {
                            return 'poids (kg)';
                        }
                        return value;
                    }}/>
                 <Bar yAxisId="left" dataKey="calories" name="Calories" fill="#E60000" />
                 <Bar yAxisId="right" dataKey="kilogram" name="Kilograms" fill="#282D30" />
                 <Label content={<CustomLabel />} value="Chart Title" position="insideTopLeft" />
                </BarChart>
            </ResponsiveContainer>
        </div> 
    );
}

const CustomLabel = ({ viewBox }) => {
    const { cx, cy } = viewBox;
    return (
        <text x={cx} y={cy} dy={-10} fontSize={16} textAnchor="middle">
            Activité quotidienne
        </text>
    );
};

export default ChartComponent;