import { ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import darkTheme from '../theme';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AddSongModal from '../addSongModal';
import FiltersMenu from '../filtersMenu'
import SongsList from '../songsList';
import { useDispatch } from 'react-redux'
import { populate } from '../../redux/slices/songsSlice';
import { useQuery } from '@apollo/client';
import { QUERY_GET_ALL_SONGS } from '../../operations/queries/getAllSongs';

const App = () => {
  const [ state, setState ] = useState(false);
  const { loading, data, error } = useQuery(QUERY_GET_ALL_SONGS);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (data) {
      dispatch(populate(data));
    }
  }, [data]);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App" >
        <Grid container sx={{ marginTop: 0 }}>
          <Grid item xs={12} sm={4} xl={2} sx={{ 
            bgcolor: "background.default",
            paddingTop: '0 !important' 
          }}>
            <FiltersMenu />
          </Grid>
          <Grid item xs={12} sm={8} xl={10} sx={{
            backgroundColor: "background.default",
            height: "100vh",
            pt: { xs:'70px', sm:'30px' },
            pl: { xs: '20px', sm: '40px' }
          }}>
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
