import { Container, Grid, Typography, Box, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const ImageWrapper = styled(Box)(
  ({ theme }) => `
    width: 100%;
    height: 500px;
    border-radius: ${theme.general.borderRadius};
    
    
    display: flex;
    align-items: center;
    justify-content: center;
    

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
`
);

const homeImg3 = `/static/images/overview/home3.webp`;

const subTexts = [
  `Sustainable Software Engineering Hackathons`,
  `NetraChain Summit`,
  `Research Project Opportunities`
];

export const HomeHero3 = () => {
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
            >
              <Typography
                variant="h4"
                style={{ marginBottom: 30 }}
                lineHeight={1.5}
              >
                <b>
                  Businesses of tomorrow need to be built on balanced
                  foundations: Empathy and pragmatism; foresight and insight;
                  humanity and technology. At Netrachain we connect
                  organizations and experts on collaboration-based projects, to
                  inform policy and spark real-time change.
                </b>
              </Typography>
              <Typography
                variant="h4"
                style={{ marginBottom: 30 }}
                lineHeight={1.5}
              >
                <b>
                  As a premier technology partner, the NetraChain hub gives you
                  access to some of the best and most innovative events:
                </b>
              </Typography>

              <Typography
                variant="h4"
                style={{ marginBottom: 30 }}
                lineHeight={1.5}
              >
                <ul>
                  {subTexts.map((st, idx) => (
                    <li key={idx}>
                      <b>{st}</b>
                    </li>
                  ))}
                </ul>
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <ImageWrapper>
              <img src={homeImg3} alt="homeHero3" />
            </ImageWrapper>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
