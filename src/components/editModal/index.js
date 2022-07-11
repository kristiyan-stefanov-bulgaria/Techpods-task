import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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

const EditModal = ({ open, onClose, songData }) => {
  console.log(songData);
  if(songData) {
    return (
      <div>
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {songData.artist}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }
};

export default EditModal;
