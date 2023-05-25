import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Container,
  IconButton
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { SearchOutlined, PersonOutline } from '@mui/icons-material';

import Logo from 'src/components/LogoSign';

const ListWrapper = styled(Box)(
  ({ theme }) => `
          .MuiTouchRipple-root {
              display: none;
          }
          
          .MuiListItem-root {
              transition: ${theme.transitions.create(['color', 'fill'])};
              
              &.MuiListItem-indicators {
                  padding: ${theme.spacing(1, 2)};
              
                  .MuiListItemText-root {
                      .MuiTypography-root {
                          &:before {
                              height: 4px;
                              width: 22px;
                              opacity: 0;
                              visibility: hidden;
                              display: block;
                              position: absolute;
                              bottom: -10px;
                              transition: all .2s;
                              border-radius: ${theme.general.borderRadiusLg};
                              content: "";
                              background: ${theme.colors.primary.main};
                          }
                      }
                  }
  
                  &.active,
                  &:active,
                  &:hover {
                  
                      background: transparent;
                  
                      .MuiListItemText-root {
                          .MuiTypography-root {
                              &:before {
                                  opacity: 1;
                                  visibility: visible;
                                  bottom: 0px;
                              }
                          }
                      }
                  }
              }
          }
  `
);

const HomeHeader: React.FC = () => {
  return (
    <Box style={{ paddingBottom: 30 }}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          py={5}
          alignItems="center"
        >
          <IconButton color="secondary">
            <SearchOutlined />
          </IconButton>
          <Logo />
          <IconButton color="secondary">
            <PersonOutline />
          </IconButton>
        </Box>
      </Container>
      <ListWrapper
        sx={{
          display: {
            xs: 'none',
            md: 'flex'
          },
          alignItems: `center`,
          justifyContent: `center`
        }}
      >
        <List disablePadding component={Box} display="flex">
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Home"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/register"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Register Now"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/jobs"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Jobs"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/software"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Software"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/traning"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Training"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/faq"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="FAQ"
            />
          </ListItem>
        </List>
      </ListWrapper>
    </Box>
  );
};

export default HomeHeader;
