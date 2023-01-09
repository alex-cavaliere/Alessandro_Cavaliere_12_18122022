import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class BarStats extends PureComponent {

  render() {
    return (
      <div className='barchart'>
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid horizontal="true" vertical="" strokeDasharray="3" />
            <XAxis dataKey="name" />
            <YAxis axisLine={false} tickLine={false} orientation="right" />
            <Tooltip />
            <Legend verticalAlign='top' align='right' height={70} iconType='circle'/>
            <Bar barSize={7} radius={[10, 10, 0, 0]} dataKey="pv" fill="#282D30" />
            <Bar barSize={7} radius={[10, 10, 0, 0]} dataKey="uv" fill="#E60000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
