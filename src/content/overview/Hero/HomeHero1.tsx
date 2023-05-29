import { Container, Grid, Typography, Box, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import ThemeButton from '../../../components/Customized/ThemeButton';

const ImageWrapper = styled(Box)(
  ({ theme }) => `
    width: 100%;
    height: 400px;
    border-radius: ${theme.general.borderRadius};
    
    
    display: flex;
    align-items: center;
    justify-content: center;
    

    img {
      width: 100%;
      height: 100%;
      display: block;
      margin-bottom: 30px;

    }
`
);

const homeImg1 = `/static/images/overview/s1.jpg`;

export const HomeHero1 = () => {
  return (
    <Container maxWidth="lg" style={{ marginBottom: 50 }}>
      <Card>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={6}>
            <ImageWrapper>
              <img src={homeImg1} alt="homeHero1" />
            </ImageWrapper>
          </Grid>
          <Grid
            xs={12}
            md={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box sx={{ pb: 2 }} textAlign="center">
              <Typography variant="h2" textAlign="center">
                <b>
                  We empower tech experts with the ideas that impact innovation.
                </b>
              </Typography>
              <ThemeButton title="FAQ" onClick={() => {}} />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
