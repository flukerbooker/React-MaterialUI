import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label
} from 'recharts';

const data = [
  {
    timestamp: '00:00:20',
    fillers: 2
  },
  {
    timestamp: '00:00:40',
    fillers: 6
  },
  {
    timestamp: '00:01:00',
    fillers: 1
  },
  {
    timestamp: '00:01:20',
    fillers: 4
  },
  {
    timestamp: '00:01:40',
    fillers: 3
  },
  {
    timestamp: '00:02:00',
    fillers: 5
  },
  {
    timestamp: '00:02:20',
    fillers: 5
  },
  {
    timestamp: '00:02:40',
    fillers: 0
  },
  {
    timestamp: '00:03:00',
    fillers: 0
  },
  {
    timestamp: '00:03:20',
    fillers: 0
  },
  {
    timestamp: '00:03:40',
    fillers: 0
  },
  {
    timestamp: '00:04:00',
    fillers: 3
  }
];

const renderQuarterTick = (tickProps) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  // const month = date.getMonth();

  // const quarterNo = Math.floor(month / 3) + 1;

  // if (month % 3 === 1) {
  //   return <text x={x} y={y - 4} textAnchor="middle">{`${quarterNo}.00`}</text>;
  // }

  // const isLast = month === 11;

  // if (month % 3 === 0 || isLast) {
  //   const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;
  //   return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  // }
  // return null;
};

const FillersChart = (props) => {
  return (
    <Card {...props}>
      <CardHeader
        title="Fillers Chart"
        subheader="Tips: Take a couple of seconds to think about what you want to say. 
        These short pauses of complete silence can serve two purposes: they will help you begin powerfully, 
        and it will help you avoid using a filler word."
      />
      <Divider />
      <CardContent sx={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 40
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" tick={false} />
            <XAxis
              dataKey="timestamp"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={renderQuarterTick}
              height={1}
              scale="band"
              xAxisId="quarter"
            >
              <Label value="Time (min)" position="bottom" />
            </XAxis>
            <YAxis>
              <Label
                value="Count"
                angle={-90}
                position="left"
                style={{ textAnchor: 'middle' }}
              />
            </YAxis>
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="fillers" fill="#F05311" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default FillersChart;
