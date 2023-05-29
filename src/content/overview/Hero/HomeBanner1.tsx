import { Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ThemeButton from 'src/components/Customized/ThemeButton';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const bannerImg1 = `/static/images/overview/b1.jpg`;

export const HomeBanner1 = () => {
  const navigate = useNavigate();
  return (
    <Box
      className="hero_banner"
      sx={{
        padding: { xs: 3, md: 10 }
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12} md={6}>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="white"
            fontWeight="normal"
          >
            Build Valued Digital Connections
          </TypographyH2>
          <TypographyH1 sx={{ mb: 2 }} variant="h1" color="white">
            Be future-proof and future-ready.
          </TypographyH1>
          <ThemeButton title="Register" onClick={() => navigate(`/register`)} />
          <ThemeButton
            title="Go Premium"
            onClick={() => navigate(`/dashboards/crypto`)}
          />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      <div className="banner__media">
        <img src={bannerImg1} alt="banner1" />
      </div>
    </Box>
  );
};
