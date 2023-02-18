import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

const AppBarBox = styled(AppBar)`
    position: sticky;
    height: 100px;
    top: 0px;
    box-shadow: none;
    backdrop-filter: blur(5px);
    border-style: solid;
    border-color: rgb(231, 235, 240);
    border-width: 0px 0px thin;
    background-color: rgba(255, 255, 255, 0.8);
`

const AppBarComponent = () => {
    return (
        <AppBarBox>
          <Toolbar>
            <IconButton
              size="large"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBarBox>
    )
};

export default AppBarComponent;