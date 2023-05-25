import { Container, Grid, Typography, Box, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import ThemeButton from 'src/components/Customized/ThemeButton';

const ImageWrapper = styled(Box)(
  ({ theme }) => `
    width: 100%;
    height: 1000px;
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

const homeImg4 = `/static/images/overview/home4.webp`;

const desc1 = `Promotional Opportunities`;
const subText1 = [`Student Network`, `IT Professional Network`];

const desc2 = `Recruitment Concierge`;
const subText2 = [
  `Build a pipeline for your growth and your innovation. Our Recruitment concierge team will connect your organization with the right people to be future thinking`,
  `One on one recruitment consulting with your HR teams to head hunt the right roles`
];

const desc3 = `Exclusive content and a new way to expand your brand`;
const subText3 = [
  `Co-branded training modules produced with our team`,
  `Articles, white papers, other thought-provoking pieces advertised to our membership`,
  `Video series focuses on your topics to bring a perspective to external and internal partners`,
  `VIP sponsorship opportunities for our events or custom events curated with your team`
];

const description = [
  {
    title: desc1,
    subTitles: subText1
  },
  {
    title: desc2,
    subTitles: subText2
  },
  {
    title: desc3,
    subTitles: subText3
  }
];

export const HomeHero4 = () => {
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
          <Grid xs={12} md={6}>
            <ImageWrapper>
              <img src={homeImg4} alt="homeHero4" />
            </ImageWrapper>
          </Grid>
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
                variant="h2"
                style={{ marginBottom: 30 }}
                lineHeight={1.5}
              >
                <b>Our culture drives what we do.</b>
              </Typography>
              <Typography
                variant="h4"
                style={{ marginBottom: 30 }}
                lineHeight={1.5}
              >
                Our values shape every action we take and decision we make.
              </Typography>
              {description.map((desc, idx) => (
                <div key={idx}>
                  <Typography
                    variant="h4"
                    style={{ marginBottom: 30 }}
                    lineHeight={1.5}
                  >
                    <b>{desc.title}</b>
                  </Typography>
                  <Typography
                    variant="h4"
                    style={{ marginBottom: 30 }}
                    lineHeight={1.5}
                  >
                    <ul>
                      {desc.subTitles.map((st, index) => (
                        <li key={`${idx}-${index}`}>{st}</li>
                      ))}
                    </ul>
                  </Typography>
                </div>
              ))}
              <ThemeButton title="Connect" onClick={() => {}} />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
