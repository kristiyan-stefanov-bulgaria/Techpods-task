import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AlignButtons from '../alignButtons';

const SongEntry = ({ songID, artist, genre, name, tag, onSortButtonClickHandler, sortIndex }) => {
  return (
    <div>
      <ListItemText primary={"Name: " +  name} sx={{ color: "common.white" }} />
      <ListItemText primary={"Artist: " +  artist} sx={{ color: "common.white" }}/>
      <ListItemText primary={"Genre: " +  genre} sx={{ color: "common.white" }} />
      <AlignButtons onSortButtonClickHandler={onSortButtonClickHandler} sortIndex={sortIndex}/>
      <Divider />
    </div>
  );
};

export default SongEntry;
