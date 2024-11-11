import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Tạo một action để fetch data từ MockAPI
export const fetchBikes = createAsyncThunk('bikes/fetchBikes', async () => {
  const response = await fetch('https://6731c1d97aaf2a9aff11e61b.mockapi.io/bikes'); // Thay URL bằng endpoint của bạn
  const data = await response.json();
  return data;
});

const bikesSlice = createSlice({
  name: 'bikes',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addBike: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBikes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBike } = bikesSlice.actions;
export default bikesSlice.reducer;
