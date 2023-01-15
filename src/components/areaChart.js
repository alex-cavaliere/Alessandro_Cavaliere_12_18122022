import React, { PureComponent } from 'react';
import { USER_AVERAGE_SESSIONS} from '../api/data';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    day: 'L',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    day: 'M',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    day: 'M',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    day: 'J',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    day: 'V',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    day: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    day: 'D',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
/*
  estendere questa logica per gli altri
*/
console.log(USER_AVERAGE_SESSIONS[0].sessions)
export default class AreaStats extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-area-chart-uw0k8';

  render() {
    return (
      <div className="areachart">
        <ResponsiveContainer width="100%" aspect={1}>
          <AreaChart
            width={200}
            height={60}
            data={USER_AVERAGE_SESSIONS[0].sessions}>
            <XAxis axisLine={false} tickLine={false} dataKey="day"/>
            <Area type="monotone" strokeWidth={2} dataKey="sessionLength" stroke="#FFFFFF" fill="red" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
