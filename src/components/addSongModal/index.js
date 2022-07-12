import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TagList from '../tagList'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { MUTATION_ADD_SONG } from '../../operations/mutation/addSong';
import { QUERY_GET_ALL_SONGS } from '../../operations/queries/getAllSongs';
import { useMutation } from '@apollo/client';

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -20%)',
  width: 400,
  bgcolor: 'background.default',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddSongModal = ({ open, onClose }) => {
  const initialState = {
    artist: '',
    name: '',
    genre: '',
    tag: [],
  }
  const [ state, setState ] = useState(initialState);

  const [addSongMutation, {data, loading, error}] = useMutation(MUTATION_ADD_SONG, {
    refetchQueries: [{
        query:  QUERY_GET_ALL_SONGS
      }],
    variables: { 
      name: state.name,
      artist: state.artist,
      genre: state.genre,
      tag: state.tag
    },
  });

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSongMutation();
    setState(initialState);
    onClose();
  };

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>

  return (
    <div>
      <Modal
          open={open}
          onClose={onClose}
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <TextField
            required
            id="artist"
            label="Artist name"
            value={state.artist}
            sx={{ mb: 2 }}
            fullWidth
            onChange={handleInputChange}
            inputProps={{ pattern: '(?!s*$).{2,}' }}
          />
          <TextField
            required
            id="name"
            value={state.name}
            label="Song title"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handleInputChange}
            inputProps={{ pattern: '(?!s*$).{2,}' }}
          />
          <TextField
            required
            id="genre"
            value={state.genre}
            label="Genre"
            fullWidth
            sx={{ mb: 2 }}
            onChange={handleInputChange}
            inputProps={{ pattern: '(?!s*$).{2,}' }}
          />
          {/* { state.tag && state.tag.length > 0 &&
              <TagList tags={state.tag} /> 
          } */}
          <Button 
            variant="outlined"
            value="save"
            sx={{ mt: 2 }}
            type="submit"
            color="success">
              Add song
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddSongModal;
