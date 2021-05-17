import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import LatestOrders from 'src/components/dashboard/LatestOrders';
import LatestProducts from 'src/components/dashboard/LatestProducts';
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
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Soundwave />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <SoundDetail sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
