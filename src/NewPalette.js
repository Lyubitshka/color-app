import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { v4 as uuid } from 'uuid';

import { Container } from '@mui/material';
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker';
import { Button } from '@mui/material';
import DragDropComponent from './DragDropComponent';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 420;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: "100vh",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function NewPalette() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('teal');
  const [colors, setColors] = useState([]);
  const [colorName, setColorName] = useState('');

  // const { valueToHex } = useColorPicker(currentColor, setCurrentColor);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  function handleChange(e) {
    // const colorName = e.target.value;
    setColorName(e.target.value);
  }

  function addNewColor(e) {
    e.preventDefault();
    const newColor = {
      color: currentColor,
      name: colorName
    }
    setColors(colors => [...colors, newColor]);
  }
  // console.log(valueToHex(currentColor))

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography variant='h5'>
          Design Your Palette
        </Typography>
        <div>
          <Button variant='contained' color='secondary'>
            Clear Palette
          </Button>
          <Button variant='contained' color='primary'>
            Random color
          </Button>
        </div>

        <ColorPicker value={currentColor} onChange={setCurrentColor} hidePresets />

        <Container>
          <form noValidate onSubmit={addNewColor}>

            <TextField
              placeholder="enter unique color name"
              label="Color Name"
              name="name"
              variant="outlined"
              fullWidth
              required
              type='text'
              value={colorName}
              onChange={handleChange}
            // error={formValues.name.error}

            />
            <Button
              style={{ backgroundColor: currentColor }}
              variant='contained'
              color="primary"
              type='submit'
            >
              Add Color
            </Button>
          </form>
        </Container>

      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        {colors.map(color => (
          <DragDropComponent color={color.color} name={color.name} />

        ))}


      </Main>
    </Box>
  );
}

export default NewPalette;