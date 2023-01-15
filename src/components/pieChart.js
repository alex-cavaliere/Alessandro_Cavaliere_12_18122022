import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 1 },
];

export default class PieStats extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <div className='piechart'>
        <p>Score</p>
        <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
          <Pie
              data={data}
              cx={120}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#E60000"
              paddingAngle={0}
              dataKey="value"
          >
          </Pie>
        </PieChart>
      </div>
    );
  }
}
