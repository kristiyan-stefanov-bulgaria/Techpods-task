import SongsList from '../songsList';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from '../theme';
import FiltersMenu from '../filtersMenu';
import Grid from '@mui/material/Grid';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App" >
        <Grid container spacing={2}>
          <Grid item xs={2} sx={{ bgcolor: "background.default", margin: 0, height: "100vh" }}>
            <FiltersMenu />
            <Button variant="outlined">Add new song</Button>  
          </Grid>
          <Grid item xs={10} sx={{ bgcolor: "background.default", margin: 0, height: "100vh" }}>
            <SongsList />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
