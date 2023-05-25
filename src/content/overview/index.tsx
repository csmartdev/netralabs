import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import {
  HomeBanner1,
  HomeBanner2,
  HomeHero1,
  HomeHero2,
  HomeHero3,
  HomeHero4
} from './Hero';

import './Overview.style.css';

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
      <HomeBanner1 />
      <HomeHero1 />
      <HomeHero2 />
      <HomeBanner2 />
      <HomeHero3 />
      <HomeHero4 />
    </OverviewWrapper>
  );
}

export default Overview;
