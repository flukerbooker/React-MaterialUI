import { Card, Divider, Box, Typography } from '@material-ui/core';

const SoundDetail = (props) => {
  return (
    <Card {...props}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        <Box
          sx={{
            height: '25%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2
          }}
        >
          <Typography variant="body1" color="primary">
            Silences
          </Typography>
          <Typography variant="h3">20 s</Typography>
        </Box>
        <Divider flexItem />
        <Box
          sx={{
            height: '25%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2
          }}
        >
          <Typography variant="body1" color="primary">
            Total Time
          </Typography>
          <Typography variant="h3">03.59 mins</Typography>
        </Box>
        <Divider flexItem />
        <Box
          sx={{
            height: '25%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2
          }}
        >
          <Typography variant="body1" color="primary">
            Filler per Minute
          </Typography>
          <Typography variant="h3">6.75 per Minute</Typography>
        </Box>
        <Divider flexItem />
        <Box
          sx={{
            height: '25%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2
          }}
        >
          <Typography variant="body1" color="primary">
            Total Word
          </Typography>
          <Typography variant="h3">636 words</Typography>
        </Box>
        <Divider flexItem />
      </Box>
    </Card>
  );
};

export default SoundDetail;
