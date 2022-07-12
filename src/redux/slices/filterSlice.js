import { createSlice, current } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    isFilterActive: false,
      activeFilters: {
        artists: [],
        genres: [],
        tags: []
      },
    },
  reducers: {
    //TODO REFACTOR
    setFilter: (state, data) => {
      let filterState = {...current(state)};
      let payload = data.payload;
      filterState.isFilterActive = true;
      
      let activeFilters = {...filterState.activeFilters};

      switch(payload.filterCategory) {
        case "artist":
          if(payload.active) {
            activeFilters.artists = activeFilters.artists.concat(payload.filter);
          } else {
            activeFilters.artists = activeFilters.artists.filter((el) => el !== payload.filter);
          }
          break;

        case "genre":
          if(payload.active) {
            activeFilters.genres = activeFilters.genres.concat(payload.filter);
          } else {
            activeFilters.genres = activeFilters.genres.filter((el) => el !== payload.filter);
          }
          break;

        case "tag": 
          if(payload.active) {
            activeFilters.tags = activeFilters.tags.concat(payload.filter);
          } else {
            activeFilters.tags = activeFilters.tags.filter((el) => el !== payload.filter);
          }
          break;

        default:
          break;
      }

      filterState.activeFilters = activeFilters;

      if (activeFilters.artists.length === 0 && activeFilters.genres.length === 0 && activeFilters.tags.length === 0)
        filterState.isFilterActive = false;

      return filterState;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
