import SongsList from '../songsList';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from '../theme';
import FiltersMenu from '../filtersMenu';
import Grid from '@mui/material/Grid';
import AddSongModal from '../addSongModal';
import { useState } from 'react';

const App = () => {
  const [ state, setState ] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App" >
        <Grid container spacing={2} sx={{ marginTop: 0 }}>
          <Grid item xs={2} sx={{ bgcolor: "background.default", margin: 0, height: "100vh" }}>
            <FiltersMenu />
          </Grid>
          <Grid item xs={10} sx={{ bgcolor: "background.default", margin: 0, height: "100vh" }}>
            <SongsList />
            <Button variant="text" onClick={() => setState(true)}>Add song</Button>
            <AddSongModal open={state} onClose={() => setState(false)} />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
