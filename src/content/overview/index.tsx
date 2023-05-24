import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import Hero from './Hero';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Helmet>
        <title>NetraLabs</title>
      </Helmet>
      <Box p={10}>
        <Hero />
      </Box>
    </OverviewWrapper>
  );
}

export default Overview;
