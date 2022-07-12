import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AlignButtons from '../alignButtons';
import Button from '@mui/material/Button';

const SongEntry = ({ songID, artist, genre, name, tag, editClickHandler, songIndex }) => {
  return (
    <div sx={{ width: '100%' }}>
      <ListItemText primary={"Name: " +  name} sx={{ color: "common.white" }} />
      <ListItemText primary={"Artist: " +  artist} sx={{ color: "common.white" }}/>
      <ListItemText primary={"Genre: " +  genre} sx={{ color: "common.white" }} />
      <AlignButtons songIndex={songIndex} />
      <Button variant="text" onClick={() => editClickHandler({ songID, artist, genre, name, tag })}>Edit</Button>
      <Divider />
    </div>
  );
};

export default SongEntry;
