import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const bannerImg2 = `/static/images/overview/b2.jpg`;

export const HomeBanner2 = () => {
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
          <TypographyH1 sx={{ mb: 2 }} variant="h1" color="white">
            The next generation of IT professionals are here to shape the
            future.
          </TypographyH1>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      <div className="banner__media">
        <img src={bannerImg2} alt="banner2" />
      </div>
    </Box>
  );
};
