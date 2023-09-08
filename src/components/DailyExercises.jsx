import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ChartComponent = ({ data }) => {

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
        <span style={{
          fontFamily: 'Roboto', fontSize: '15px', fontWeight: '500', lineHeight: '24px', textAlign: 'left', color: '#20253A'
        }}
        >Activité quotidienne</span>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'row', width: '22%',
        justifyContent: 'space-around'
      }}>
        {payload.map((entry, index) => (
          <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center', }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: entry.color,
                marginLeft: '5px',
              }}
            />

            {entry.value === 'Calories' && <span style={{ marginLeft: '5px', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '500', lineHeight: '24px', textAlign: 'left' }}>Calories brûlées (kCal)</span>}
            {entry.value === 'Kilograms' && <span style={{ marginLeft: '5px', fontFamily: 'Roboto', fontSize: '14px', fontWeight: '500', lineHeight: '24px', textAlign: 'left' }}>poids (kg)</span>}

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
          <XAxis
            dataKey="day"
            tickLine={false}
            tickFormatter={(value, index) => index + 1}
            tick={{ fill: 'rgba(155, 158, 172, 1)', fontSize: '14px' }}
            tickMargin={10}
          />
          <YAxis
            hide={true}
            yAxisId="left"
            orientation="left"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(155, 158, 172, 1)', fontSize: '14px' }}
            tickMargin={10}
            tickCount={3}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(155, 158, 172, 1)', fontSize: '14px' }}
            tickMargin={10}
            tickCount={4}
            type="number"
            domain={[(dataMin) => dataMin - 1, (dataMax) => dataMax + 1]}
          />
          <Tooltip content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }} />
          <Legend align="right" verticalAlign="top"
            iconType="circle"
            iconSize={8}
            height={50}
            wrapperStyle={{
              paddingBottom: '30px',

            }}
            content={<CustomLegend />}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            name="Kilograms"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            name="Calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>

      </ResponsiveContainer>
    </div>
  );
}

export default ChartComponent;