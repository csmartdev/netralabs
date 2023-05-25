import { Container, Grid, Typography, Box, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const homeImg2 = `/static/images/overview/home2.webp`;

const home_desc2_subs = [
  `NetraChain is a hub that nurtures digital innovation, continuous learning and career opportunities for tech professionals worldwide.`,
  `We empower tech professionals with the ideas that impact innovation.`,
  `We see our members as human, and we work with the challenges they face.`
];

export const HomeHero2 = () => {
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
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                padding: { xs: 3, md: 5 }
              }}
              textAlign="center"
            >
              {home_desc2_subs.map((desc, idx) => (
                <Typography
                  variant="h4"
                  textAlign="center"
                  key={idx}
                  style={{ marginBottom: 30 }}
                  lineHeight={1.5}
                >
                  <b>{desc}</b>
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <ImageWrapper>
              <img src={homeImg2} alt="homeHero2" />
            </ImageWrapper>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
