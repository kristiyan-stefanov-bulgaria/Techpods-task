import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const SongEntry = ({ songID, artist, genre, name, tag, editClickHandler, handleDeleteClick }) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12} sm={6}>
        <ListItemText primary={"Name: " +  name} sx={{ color: "common.white" }} />
        <ListItemText primary={"Artist: " +  artist} sx={{ color: "common.white" }}/>
        <ListItemText primary={"Genre: " +  genre} sx={{ color: "common.white", mb: 2 }} />  
      </Grid>
      <Grid container item xs={4}>
        {tag.length > 0 && tag.map((currTag) => {
          return (
            <Button key={currTag} variant="outlined" sx={{ marginRight: 1 }} color="secondary" size="small">{currTag}</Button>
          );
        })}
      </Grid>
      <Grid container item>
        <Button variant="outlined"
          onClick={() => editClickHandler({ 
            songID,
            artist,
            genre,
            name,
            tag 
          })}>Edit</Button>
        <Button variant="outlined"
          sx={{ ml: 1 }}
          color="error"
          value={songID}
          onClick={handleDeleteClick}>
            Delete
          </Button>
      </Grid>
    </Grid>
  );
};

export default SongEntry;
