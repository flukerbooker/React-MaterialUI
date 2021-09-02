import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    timestamp: '0.00',
    pace: 0
  },
  {
    timestamp: '0.30',
    pace: 166
  },
  {
    timestamp: '1.00',
    pace: 181
  },
  {
    timestamp: '1.30',
    pace: 177
  },
  {
    timestamp: '2.00',
    pace: 174
  },
  {
    timestamp: '2.30',
    pace: 195
  },
  {
    timestamp: '3.00',
    pace: 178
  },
  {
    timestamp: '3.30',
    pace: 175
  },
  {
    timestamp: '4.00',
    pace: 176
  }
];

const formatData = data.map((ele) => {
  return {
    ...ele,
    range: [140, 175]
  };
});

const AveragePace = (props) => {
  return (
    <Card {...props}>
      <CardHeader
        title="Average Pace"
        subheader="Average pace for good speaking is around 140 to 175 WPM"
      />
      <Divider />
      <CardContent sx={{ height: '420px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={formatData}
            margin={{
              top: 25,
              right: 40,
              left: 40,
              bottom: 40
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp">
              <Label value="Time (min)" position="bottom" />
            </XAxis>
            <YAxis>
              <Label
                value="Word per Minute"
                angle={-90}
                position="left"
                style={{ textAnchor: 'middle' }}
              />
            </YAxis>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pace"
              stroke="#8884d8"
              fill="#38E559"
            />
            <Area dataKey="range" stroke="#8884d8" fill="#EDFFB9" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default AveragePace;
