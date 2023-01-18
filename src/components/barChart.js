import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: '1',
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: '2',
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: '3',
    uv: 20,
    pv: 98,
    amt: 22,
  },
  {
    name: '4',
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: '5',
    uv: 18,
    pv: 48,
    amt: 21,
  },
  {
    name: '6',
    uv: 23,
    pv: 38,
    amt: 25,
  },
  {
    name: '7',
    uv: 34,
    pv: 43,
    amt: 21,
  },
];

export default class BarStats extends PureComponent {

  render() {
    return (
      <div className='barchart'>
        <ResponsiveContainer width="100%" aspect={3}>
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
            <XAxis axisLine={false} tickLine={false} dataKey="name" />
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
