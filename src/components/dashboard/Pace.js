import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Box
} from '@material-ui/core';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Label,
  Text
} from 'recharts';

const data = [
  { name: 'very slow', value: 50 },
  { name: 'slow', value: 50 },
  { name: 'normal', value: 50 },
  { name: 'fast', value: 50 },
  { name: 'very fast', value: 50 }
];

const COLORS = ['#FF0D0D', '#FF8E15', '#69B34C', '#FF8E15', '#FF0D0D'];

let renderLabel = function (entry) {
  return entry.name;
};

const Pace = (props) => {
  return (
    <Card {...props}>
      <CardHeader title="Pace" />
      <Divider />
      <CardContent
        sx={{ height: '420px', padding: '2rem', position: 'relative' }}
      >
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              label={renderLabel}
              data={data}
              cy={180}
              startAngle={180}
              endAngle={0}
              innerRadius={120}
              outerRadius={150}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label
                content={(props) => {
                  const {
                    viewBox: { cx, cy }
                  } = props;
                  const positioningProps = {
                    x: cx,
                    y: cy,
                    textAnchor: 'middle',
                    verticalAnchor: 'end'
                  };

                  return (
                    <Text
                      {...positioningProps}
                      style={{
                        fontWeight: 'bold',
                        fill: '#646464',
                        fontSize: '3rem',
                        transform: 'translateY(-2.75rem)'
                      }}
                    >
                      {'178'}
                    </Text>
                  );
                }}
              />
              <Label
                content={(props) => {
                  const {
                    viewBox: { cx, cy }
                  } = props;
                  const positioningProps = {
                    x: cx,
                    y: cy,
                    textAnchor: 'middle',
                    verticalAnchor: 'middle'
                  };

                  return (
                    <Text
                      {...positioningProps}
                      style={{
                        fill: '#646464',
                        fontSize: '1rem',
                        transform: 'translateY(-2rem)'
                      }}
                    >
                      {'words/min'}
                    </Text>
                  );
                }}
              />
              <Label
                content={(props) => {
                  const {
                    viewBox: { cx, cy }
                  } = props;
                  const positioningProps = {
                    x: cx,
                    y: cy,
                    textAnchor: 'middle'
                  };

                  return (
                    <Text
                      {...positioningProps}
                      style={{
                        fill: '#393939',
                        fontSize: '1rem',
                        transform: 'translateY(2rem)'
                      }}
                    >
                      Your pace is a little fast. You should reduce your speed a
                      bit
                    </Text>
                  );
                }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Divider />
        <Box
          sx={{
            position: 'relative',
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography variant="body1">
            Tips: Make sure you’re practicing diaphragmatic or “belly”
            breathing, including breathing more deeply and slowly.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Pace;
