import { createSlice, current } from '@reduxjs/toolkit';

export const songsSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    populate: (state, data) => {
      if(data.payload.getSongs)
        return [...data.payload.getSongs];
      
      return [...data.payload.getFilteredSongs];
    },

    moveUp: (state, data) => {
      let songsList = [...current(state)];
      let index = parseInt(data.payload);

      if (index) {
        let temp = songsList[index - 1];

        songsList[index - 1] = songsList[index];
        songsList[index] = temp;

        return songsList;
      }

      return songsList;
    },

    moveDown: (state, data) => {
      let songsList = [...current(state)];
      let index = parseInt(data.payload);

      if (index < songsList.length - 1) {
        let temp = songsList[index + 1];

        songsList[index + 1] = songsList[index];
        songsList[index] = temp;

        return songsList;
      }

      return songsList;
    },
  },
});

export const { populate, moveUp, moveDown } = songsSlice.actions;
export default songsSlice.reducer;
