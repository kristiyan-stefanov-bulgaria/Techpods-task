import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { moveUp, moveDown } from '../../redux/slices/songsSlice';

const AlignButtons = ({ songIndex }) => {
  const dispatch = useDispatch();

  const sortClickHandler = (e) => {
    e.preventDefault();
    if (e.target.value === 'up')
      return dispatch(moveUp(e.target.dataset['songIndex']));
  
    dispatch(moveDown(e.target.dataset['songIndex']));
  };
  
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" value="up" data-song-index={songIndex} onClick={sortClickHandler}>Up</Button>
      <Button variant="text" value="down" data-song-index={songIndex} onClick={sortClickHandler}>Down</Button>
    </Stack>
  );
};

export default AlignButtons;
