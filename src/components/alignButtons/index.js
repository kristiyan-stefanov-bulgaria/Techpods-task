import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AlignButtons = ({ onSortButtonClickHandler, sortIndex }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" value="up" data-sort-index={sortIndex} onClick={onSortButtonClickHandler}>Up</Button>
      <Button variant="text" value="down" data-sort-index={sortIndex} onClick={onSortButtonClickHandler}>Down</Button>
    </Stack>
  );
};

export default AlignButtons;
