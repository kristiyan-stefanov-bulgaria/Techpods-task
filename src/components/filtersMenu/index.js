import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const FiltersMenu = () => {
  return (
    <Paper sx={{ bgcolor: "background.default" }}>
      <MenuList>
        <FormGroup>
            <MenuItem>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="Pesho kalibrata" />
            </MenuItem>
        </FormGroup>
      </MenuList>
    </Paper>
  );
};

export default FiltersMenu;
