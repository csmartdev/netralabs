import { Container, Grid, Typography, Box, Card, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowRightAltOutlined } from '@mui/icons-material';
import React from 'react';

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

function Register() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12} md={6}>
          <Card style={{ paddingBottom: 20 }}>
            <ImageWrapper>
              <img
                src="/static/images/auth/professional-man-smiling.webp"
                alt="professional"
              />
            </ImageWrapper>
            <Typography variant="h4" textAlign="center">
              <Box sx={{ p: 2 }}>
                <b>I am an IT Professional, Student, or Researcher</b>
              </Box>
              <Button
                title="Register"
                variant="text"
                endIcon={<ArrowRightAltOutlined />}
                color="secondary"
              >
                Register
              </Button>
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card style={{ paddingBottom: 20 }}>
            <ImageWrapper>
              <img
                src="/static/images/auth/business-meeting-over-coffee.webp"
                alt="business"
              />
            </ImageWrapper>
            <Typography variant="h4" textAlign="center">
              <Box sx={{ p: 2 }}>
                <b>I am a Business</b>
              </Box>
              <Box>
                <Typography component="span" variant="subtitle2">
                  Software Vendors, Tech Training Companies, and IT Recruiters
                </Typography>
              </Box>
              <Button
                title="Register"
                variant="text"
                endIcon={<ArrowRightAltOutlined />}
                color="secondary"
              >
                Register
              </Button>
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Register;
