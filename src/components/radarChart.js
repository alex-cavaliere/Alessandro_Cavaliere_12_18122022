import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
const data = [
    {
        subject: "Intensité",
        A: 120,
        B: 110,
        fullMark: 150
    },
    {
        subject: "Vitesse",
        A: 98,
        B: 130,
        fullMark: 150
    },
    {
        subject: "Force",
        A: 86,
        B: 130,
        fullMark: 150
    },
    {
        subject: "Endurance",
        A: 99,
        B: 100,
        fullMark: 150
    },
    {
        subject: "Energie",
        A: 85,
        B: 90,
        fullMark: 150
    },
    {
        subject: "Cardio",
        A: 65,
        B: 85,
        fullMark: 150
    }
];

export default class RadarStats extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';

  render() {
    return (
      <div className='radarchart'>
        <ResponsiveContainer width="100%" aspect={1}>
          <RadarChart className='prova' cx="50%" cy="50%" outerRadius="65%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar name="Mike" dataKey="A" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
