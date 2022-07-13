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
import Button from '@mui/material/Button';
import { useDispatch  } from 'react-redux';
import { QUERY_GET_ALL_SONGS } from '../../operations/queries/getAllSongs';
import { useQuery } from '@apollo/client';
import { setFilter } from '../../redux/slices/filterSlice';
import AddSongModal from '../addSongModal';

const FiltersMenu = () => {
  const [ mobileOpen, setMobileOpen ] = useState(false);
  const [ state, setState ] = useState(false);
  const dispatch = useDispatch();

  const { data } = useQuery(QUERY_GET_ALL_SONGS);
  let filters = [];
  
  if(data) {
    filters = [
      { 'artist': data.getSongs.map(song => song.artist).filter(artist => artist) },
      { 'genre': data.getSongs.map(song => song.genre).filter(genre => genre) },
      { 'tag': data.getSongs.map(song => song.tag).filter(tag => tag.length > 0) },
    ];

    let tempTags = [];
    filters[2].tag.map((tags) => tempTags = tempTags.concat(tags));

    //Hack to filter unique values
    filters[0].artist = [...new Set(filters[0].artist)];
    filters[1].genre = [...new Set(filters[1].genre)];
    filters[2].tag = [...new Set(tempTags)];
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCheckBoxChange = (e) => {
    dispatch(setFilter({ 
      active: e.target.checked,
      filter: e.target.value,
      filterCategory: e.target.dataset['filterCategory']
     }));
  };

  const drawer = (
    <Box sx={{ m: "20px" }}>
      {filters.map((filterSegment) => (
        <div key={Object.keys(filterSegment)[0]}>
          <Typography variant="h4">{Object.keys(filterSegment)[0].toUpperCase()}</Typography>
          <Divider />
          <FormGroup
            row
            sx={{
              overflow: "auto",
              maxHeight: "170px",
              mt: "10px",
              "&::-webkit-scrollbar": { "backgroundColor": "transparent" },
              "::-webkit-scrollbar-thumb": {
                borderRadius: "10px",
                backgroundColor: '#494949'
              },
            }}
          >
            {filterSegment[Object.keys(filterSegment)[0]].length === 0 && 
              <Typography variant="h6" color="error.light" noWrap component="div">
                No entries
              </Typography>
            }
            {filterSegment[Object.keys(filterSegment)].map(
              (text) => (
                <FormControlLabel
                key={text}
                sx={{ width: "100%" }}
                control={<Checkbox onClick={handleCheckBoxChange} inputProps={{ 'data-filter-category': Object.keys(filterSegment)[0] }} value={text}/>}
                label={text}
                />
              )
            )}
          </FormGroup>
      </div>
    ))}
    </Box>
  );

  return (
    <>
      <AppBar sx={{ display: { xs: "block", sm: "none" } }}>
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
          "& .MuiDrawer-paper": { 
            boxSizing: "border-box",
            width: "70%" },
        }}
      >
      {drawer}
      <Button variant="outlined" sx={{ alignSelf: 'start', ml: '16px' }} onClick={() => setState(true)}>Add song</Button>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            position: "inherit",
            backgroundColor: '#272727'
          },
          height: "100%",
        }}
        open={mobileOpen}
      >
      {drawer}
      <Button variant="outlined" sx={{ alignSelf: 'start', ml: '16px' }} onClick={() => setState(true)}>Add song</Button>
      </Drawer>
      <AddSongModal open={state} onClose={() => setState(false)} />
    </>
  );
};

export default FiltersMenu;
