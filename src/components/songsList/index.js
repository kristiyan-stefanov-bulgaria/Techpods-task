import { useMutation } from '@apollo/client';
import SongEntry from '../songEntry';
import { useState } from 'react';
import { QUERY_GET_ALL_SONGS } from '../../operations/queries/getAllSongs';
import { MUTATION_DELETE_SONG } from '../../operations/mutation/deleteSong';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ReactPlayer from 'react-player/youtube'
import EditModal from '../editModal';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useSelector } from 'react-redux';

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

  // state.filtered = [];
  
  return (
    <Box sx={{ width: "100%" }}>
      <List>
        {songsList.length === 0 &&
          <Alert severity="error">
            <AlertTitle>No songs</AlertTitle>
            You currently have no songs in your playlist!
          </Alert>
        }
        {songsList.map(({ _id, artist, genre, name, tag }, index) => {
          return (
            <ListItem disablePadding key={_id}>
              <SongEntry
                key={_id}
                songID={_id}
                artist={artist}
                genre={genre}
                name={name}
                tag={tag}
                songIndex={index}
                editClickHandler={handleModalOpen}
              />
              {/* <ReactPlayer url='https://www.youtube.com/watch?v=F4hQ4J4BFOM' controls={true} /> */}
              <Button variant="text" value={_id} onClick={handleDeleteClick}>Delete</Button>
            </ListItem>
          );
        })}
      </List>
      <EditModal
        open={modalData.open}
        songData={modalData.modalData}
        onClose={handleModalClose}
      />
    </Box>
  );
};

export default SongsList;
