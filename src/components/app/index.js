import { ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import darkTheme from '../theme';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AddSongModal from '../addSongModal';
import FiltersMenu from '../filtersMenu'
import SongsList from '../songsList';
import { useDispatch, useSelector } from 'react-redux'
import { populate } from '../../redux/slices/songsSlice';
import { useQuery } from '@apollo/client';
import { QUERY_GET_ALL_SONGS } from '../../operations/queries/getAllSongs';
import { QUERY_GET_FILTERED_SONGS } from '../../operations/queries/getFilteredSongs';

const App = () => {
  const [ state, setState ] = useState(false);
  const filtersState = useSelector((state) => state.filtersReducer);
  const dispatch = useDispatch();
  let loading;
  let data;

  const res = useQuery(QUERY_GET_FILTERED_SONGS, { variables: filtersState.activeFilters });
  const normalQuery = useQuery(QUERY_GET_ALL_SONGS);

  if (filtersState.isFilterActive) {
    loading = res.loading;
    data = res.data;
  } else {
    loading = normalQuery.loading;
    data = normalQuery.data;
  }

  useEffect(() => {
    if (data) {
      dispatch(populate(data));
    }
  }, [data, dispatch]);
  
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
            {loading && 
              <h1>Loading...</h1>
            }
            <Button variant="text" onClick={() => setState(true)}>Add song</Button>
            <AddSongModal open={state} onClose={() => setState(false)} />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
