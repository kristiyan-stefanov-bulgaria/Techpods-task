import { useMutation } from '@apollo/client';
import SongEntry from '../songEntry';
import { useState } from 'react';
import { QUERY_GET_ALL_SONGS } from '../../operations/queries/getAllSongs';
import { MUTATION_DELETE_SONG } from '../../operations/mutation/deleteSong';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import EditModal from '../editModal';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import AlignButtons from '../alignButtons';

const SongsList = () => {
  const [ modalData, setOpen ] = useState({ open: false, modalData: {} });
  const songsList = useSelector((state) => state.songsReducer);

  const handleModalOpen = (songData) => setOpen({ open: true, modalData: songData });
  const handleModalClose = () => setOpen({ open: false, modalData: {}});

  const [deleteSongMutation, { deleteResult, deleteLoading, deleteError }] = useMutation(MUTATION_DELETE_SONG, {
    refetchQueries: [{
        query:  QUERY_GET_ALL_SONGS
      }],
  });
  
  if (deleteLoading) return <h1>Loading....</h1>;
  if (deleteError) return <h1>Error</h1>;

  const handleDeleteClick = (e) => {
    e.preventDefault();
    deleteSongMutation({
      variables: { 
        id: e.target.value,
      }
    });

    console.log(deleteResult);
  }
  
  return (
    <>
      <List>
        <Grid item xs={12}>
          {songsList.length === 0 &&
            <Alert severity="error">
              <AlertTitle>No songs</AlertTitle>
              You currently have no songs in your playlist - <strong>add some!</strong>
            </Alert>
          }
        </Grid>
        {songsList.map(({ _id, artist, genre, name, tag }, index) => {
          return (
            <Grid container item xs={12} py={2} key={_id}>
              <ListItem disablePadding>
                <Grid item xs={9} sm={6} md={4} xl={2} >
                  <SongEntry
                    key={_id}
                    songID={_id}
                    artist={artist}
                    genre={genre}
                    name={name}
                    tag={tag}
                    editClickHandler={handleModalOpen}
                    handleDeleteClick={handleDeleteClick}
                  />
                </Grid>
                <Grid container direction="column" item xs={3} sm={1} mb="auto" >
                  <AlignButtons songIndex={index} numOfSongs={songsList.length} />
                </Grid>
              </ListItem>
            </Grid>
          );
        })}
      </List>
      <EditModal
        open={modalData.open}
        songData={modalData.modalData}
        onClose={handleModalClose}
      />
    </>
  );
};

export default SongsList;
