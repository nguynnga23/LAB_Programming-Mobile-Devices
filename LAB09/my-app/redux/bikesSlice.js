import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Tạo một action để fetch data từ MockAPI
export const fetchBikes = createAsyncThunk('bikes/fetchBikes', async () => {
  const response = await fetch('https://6731c1d97aaf2a9aff11e61b.mockapi.io/bikes'); // Thay URL bằng endpoint của bạn
  const data = await response.json();
  return data;
});

// Tạo một action để thêm bike vào MockAPI
export const addBikeToAPI = createAsyncThunk(
  'bikes/addBike',
  async (newBike) => {
    const response = await fetch('https://6731c1d97aaf2a9aff11e61b.mockapi.io/bikes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBike),
    });

    if (!response.ok) {
      throw new Error('Failed to add bike');
    }
    const data = await response.json();
    return data;
  }
);

const bikesSlice = createSlice({
  name: 'bikes',
  initialState: {
    items: [],
    currentItem: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    }
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

export const { addBike, setCurrentItem } = bikesSlice.actions;
export default bikesSlice.reducer;
