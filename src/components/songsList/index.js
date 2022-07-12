import { useQuery } from '@apollo/client';
import SongEntry from '../songEntry';
import { QUERY_GET_ALL_SONGS } from '../../operations/queries/getAllSongs';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useReducer, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube'
import EditModal from '../editModal';

const reducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE':
      let songList = action.data.getSongs;
      let songListIndexed = songList.map((song, index) => {
        return {...song, sortIndex: index }
      });
      
      return songListIndexed;
    
    case 'MOVE_UP':
      if (parseInt(action.sortIndex)) {
        let index = parseInt(action.sortIndex);
        let sortedSongList = [...state];
        let temp = sortedSongList[index - 1];
        temp.sortIndex = index;
        sortedSongList[index].sortIndex = index - 1;

        sortedSongList[index - 1] = sortedSongList[index];
        sortedSongList[index] = temp;
        
        return sortedSongList;
      }

      return [...state];
  
    case 'MOVE_DOWN':
      if (parseInt(action.sortIndex) < state.length - 1) {
        let index = parseInt(action.sortIndex);
        let sortedSongList = [...state];
        let temp = sortedSongList[index + 1];
        temp.sortIndex = index;
        sortedSongList[index].sortIndex = index + 1;

        sortedSongList[index + 1] = sortedSongList[index];
        sortedSongList[index] = temp;

        return sortedSongList;
      }

      return [...state];

    default:
      return [...state];
  }
}

const SongsList = () => {
  const { loading, data, error } = useQuery(QUERY_GET_ALL_SONGS)
  const [ state, dispatch ] = useReducer(reducer, []);
  const [ modalData, setOpen ] = useState({ open: false, modalData: {} });
  const handleModalOpen = (songData) => setOpen({ open: true, modalData: songData });
  const handleModalClose = () => setOpen({ open: false, modalData: {}});

  useEffect(() => {
    if (data) {
      dispatch({ type: "POPULATE", data: data });
    }
  }, [data])
  
  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>Error</h1>;

  const sortClickHandler = (e) => {
    e.preventDefault();
    if (e.target.value === 'up')
      return dispatch({ type: 'MOVE_UP', sortIndex: e.target.dataset['sortIndex'] });

    dispatch({ type: 'MOVE_DOWN', sortIndex: e.target.dataset['sortIndex'] });
  };

  state.filtered = [];

  if (state.length) {
    return (
      <Box sx={{ width: "100%" }}>
        <List>
          {state.map(({ _id, artist, genre, name, tag, sortIndex }) => {
            return (
              <ListItem disablePadding key={_id}>
                <SongEntry
                  key={_id}
                  songID={_id}
                  artist={artist}
                  genre={genre}
                  name={name}
                  tag={tag}
                  sortIndex={sortIndex}
                  onSortButtonClickHandler={sortClickHandler}
                  editClickHandler={handleModalOpen}
                />
                {/* <ReactPlayer url='https://www.youtube.com/watch?v=F4hQ4J4BFOM' controls={true} /> */}
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
  }
};

export default SongsList;
