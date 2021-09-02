import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import AveragePace from 'src/components/dashboard/AveragePace';
import Pace from 'src/components/dashboard/Pace';
import Fillers from 'src/components/dashboard/Fillers';
import FillersChart from 'src/components/dashboard/FillersChart';
import RepetitionWords from 'src/components/dashboard/RepetitionWords';
import Vocabulary from 'src/components/dashboard/Vocabulary';
import Keyword from 'src/components/dashboard/Keyword';
import Transcript from 'src/components/dashboard/Transcript';
import SoundDetail from 'src/components/dashboard/SoundDetail';
import Soundwave from 'src/components/dashboard/Soundwave';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={9} md={12} xl={9} xs={12}>
            <Soundwave />
          </Grid>
          <Grid item lg={3} md={12} xl={3} xs={12}>
            <SoundDetail sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={8} md={12} xl={8} xs={12}>
            <AveragePace />
          </Grid>
          <Grid item lg={4} md={12} xl={4} xs={12}>
            <Pace sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <Fillers sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <FillersChart />
          </Grid>
          <Grid item lg={4} md={12} xl={4} xs={12}>
            <RepetitionWords />
          </Grid>
          <Grid item lg={4} md={12} xl={4} xs={12}>
            <Vocabulary />
          </Grid>
          <Grid item lg={4} md={12} xl={4} xs={12}>
            <Keyword />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Transcript />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
