import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Box
} from '@material-ui/core';

const phrasesData = [
  'I think that',
  'you know',
  'or something',
  'stuff like that',
  'kind of'
];

const Fillers = (props) => {
  return (
    <Card {...props}>
      <CardHeader
        title="Fillers"
        subheader="Try to reduce your fillers contain hesitation frequency, 
        fillers word, and frequency phrases to imporve your performance."
      />
      <Divider />
      <CardContent>
        <Box sx={{ padding: '1.25rem 0 2.25rem 0' }}>
          <Typography>Hesitation Count: 27 times</Typography>
        </Box>
        <Divider />
        <Box sx={{ padding: '2.25rem 0' }}>
          <Typography>Filler Words: 27 times</Typography>
        </Box>
        <Divider />
        <Box sx={{ padding: '2.25rem 0' }}>
          <Typography>
            Frequency:
            {phrasesData.map((phrase, index) => {
              return (
                <span
                  key={index}
                  style={{
                    backgroundColor: '#FDFD96',
                    padding: '.55rem',
                    margin: '.35rem',
                    borderRadius: '50px'
                  }}
                >
                  {phrase}
                </span>
              );
            })}
          </Typography>
        </Box>
        <Divider />
      </CardContent>
    </Card>
  );
};

export default Fillers;
