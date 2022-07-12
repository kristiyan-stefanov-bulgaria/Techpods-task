import { React, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';

const FiltersMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //todo: must get available artists from songs so you can filter :)\
  const drawer = (
    <>
      <Box sx={{ m: "20px 20px" }}>
        <Typography variant="h4">Artist</Typography>
        <Divider />
        <FormGroup
          row
          sx={{
            overflow: "auto",
            height: "170px",
            mt: "10px",
            "&::-webkit-scrollbar": { "backgroundColor": "transparent" },
            "::-webkit-scrollbar-thumb": {
              bgcolor: "#494949",
              borderRadius: "10px",
            },
          }}
        >
          {["Azis", "Preslava", "Eminem", "AC DC", "Red Hot chili peppers"].map(
            (text) => (
              <FormControlLabel
                key={text}
                sx={{ width: "100%" }}
                control={<Checkbox />}
                label={text}
              />
            )
          )}
        </FormGroup>
      </Box>
      {/*  todo:must get available Genre from songs so you can filter :)  */}
      <Box sx={{ m: "20px 20px" }}>
        <Typography variant="h4">Genre</Typography>
        <Divider />
        <FormGroup
          row
          sx={{
            overflow: "auto",
            height: "170px",
            mt: "10px",
            "&::-webkit-scrollbar": { "backgroundColor": "transparent" },
            "::-webkit-scrollbar-thumb": {
              bgcolor: "#494949",
              borderRadius: "10px",
            },
          }}
        >
          {["Rock", "POP", "Azis", "Kpop", "EDM"].map((text) => (
            <FormControlLabel
              key={text}
              sx={{ width: "100%" }}
              control={<Checkbox />}
              label={text}
            />
          ))}
        </FormGroup>
      </Box>
      {/* todo:must get available Tags from songs so you can filter :)  */}
      <Box sx={{ m: "20px 20px" }}>
        <Typography variant="h4">Tags</Typography>
        <Divider />
        <FormGroup
          row
          sx={{
            overflow: "auto",
            height: "170px",
            mt: "10px",
            "&::-webkit-scrollbar": { "backgroundColor": "transparent" },
            "::-webkit-scrollbar-thumb": {
              bgcolor: "#494949",
              borderRadius: "10px",
            },
          }}
        >
          {["Qka pesen", "MN PROSTI", "UMIRAM"].map((text) => (
            <FormControlLabel
              key={text}
              sx={{ width: "100%" }}
              control={<Checkbox />}
              label={text}
            />
          ))}
        </FormGroup>
      </Box>
    </>
  );

  return (
    <>
      <AppBar
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Filter Menu
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "70%" },
        }}
      >
      {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            position: "inherit",
          },
          height: "100%",
        }}
        open={mobileOpen}
      >
      {drawer}
      </Drawer>
    </>
  );
};

export default FiltersMenu;
