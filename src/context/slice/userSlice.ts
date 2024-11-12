import { getUsers } from "@/server/actions/users";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserState extends Pagination {
  loading: boolean;
  users: UserAccount[];
  count: number;
}

const initialState: UserState = {
  loading: false,
  users: [],
  count: 0,
  current_page: 1,
  total_pages: 1,
};

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (params: string, { rejectWithValue }) => {
    try {
      const response = await getUsers(params);
      if (!response) {
        throw new Error("No se pudo obtener la respuesta.");
      }
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred.");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (
      state,
      action: {
        payload: {
          users: UserAccount[];
          count: number;
          current_page: number;
          total_pages: number;
        };
      }
    ) => {
      state.users = action.payload.users;
      state.count = action.payload.count;
      state.current_page = action.payload.current_page;
      state.total_pages = action.payload.total_pages;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        const {
          count,
          current_page,
          results: users,
          total_pages,
        } = action.payload;
        state.users = users;
        state.count = count;
        state.current_page = current_page;
        state.total_pages = total_pages;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
