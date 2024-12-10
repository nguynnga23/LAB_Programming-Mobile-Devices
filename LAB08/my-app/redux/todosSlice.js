import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

// Tạo 1 acton để Fetch API từ MockAPI
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async()=>{
  const response = await fetch("https://6757f15ec0a427baf94e91f0.mockapi.io/todo");
  const data = await response.json();
  return data;
});

// Tạo 1 action để add Todo vào MockAPI
export const addTodo = createAsyncThunk("todos/addTodo", async(newTodo)=>{
  const response = await fetch("https://6757f15ec0a427baf94e91f0.mockapi.io/todo", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(newTodo),
  });
  if(!response.ok){
    throw new Error("Fail to add Todo!")
  }
  const data = await response.json();
  return data;
  });

  // Tạo 1 action để edit Todo vào MockAPI
  export const editTodo = createAsyncThunk(
    "todos/editTodo",
    async ({ id, newTodo }) => {
      const response = await fetch(
        `https://6757f15ec0a427baf94e91f0.mockapi.io/todo/${id}`, // Use specific ID
        {
          method: "PUT", // Update an existing todo (PUT for editing)
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTodo),
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to edit todo!"); // More descriptive error message
      }
  
      const data = await response.json();
      return data; // Return the updated todo
    }
  );

  // Tạo 1 action để delete Todo vào MockAPI
  export const deleteTodo = createAsyncThunk("todos/deleteTodo", async ({ id }) => {
    const response = await fetch(
      `https://6757f15ec0a427baf94e91f0.mockapi.io/todo/${id}`, // Use specific ID
      {
        method: "DELETE", // Update an existing todo (PUT for editing)
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete todo!"); // More descriptive error message
    }

    return id;
  });

  const todoSlice = createSlice({
    name: 'todos',
    initialState: {
      items: [
        // { id: '1', job: 'To check email' },
        // { id: '2', job: 'UI task web page' },
        // { id: '3', job: 'Learn javascript basic' },
        // { id: '4', job: 'Learn HTML Advance' },
        // { id: '5', job: 'Medical App UI' },
        // { id: '6', job: 'Learn Java' },
      ],
      currentItem: null,
      loading: false,
      error: null
    },
    reducers: {
      setCurrentItem:(state, action)=>{
        state.currentItem = action.payload;
      }
    },
    extraReducers: (builder) =>{
      builder
      .addCase(fetchTodos.pending, (state)=>{
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action)=>{
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action)=>{
        state.loading = false;
        state.items = action.error.message;
      });
    }
  }
);
export const {setCurrentItem} = todoSlice.actions;
export default todoSlice.reducer;