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

      const CustomLegend = ({ payload }) => (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontFamily: 'Roboto', fontSize: '15px', fontWeight: '500', lineHeight: '24px', textAlign: 'left', color: '#20253A'
}}
            >Activité quotidienne</span>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', width: '22%',
          justifyContent: 'space-around' }}>
          {payload.map((entry, index) => (
            <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center',  }}>
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: entry.color,
                  marginLeft: '5px',
                }}
              />

              {entry.value === 'Calories' && <span style={{ marginLeft: '5px', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '500', lineHeight: '24px', textAlign: 'left' }}>Calories brûlées (kCal)</span>}
              {entry.value === 'Kilograms' && <span style={{ marginLeft: '5px',fontFamily: 'Roboto', fontSize: '14px', fontWeight: '500', lineHeight: '24px', textAlign: 'left' }}>poids (kg)</span>}
              
            </div>
          ))}
          </div>
        </div>
      );
    
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
                       
                    }}
                    content={<CustomLegend />}
                  />
                 <Bar yAxisId="left" dataKey="calories" name="Calories" fill="#E60000" />
                 <Bar yAxisId="right" dataKey="kilogram" name="Kilograms" fill="#282D30" />
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