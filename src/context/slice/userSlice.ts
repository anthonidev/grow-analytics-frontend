import {
  createUserService,
  deleteUserService,
  getUsers,
  updateUserService,
} from "@/server/actions/users";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await deleteUserService(id);
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

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (props: { id: number; user: EditUser; close: () => void }) => {
    try {
      const response = await updateUserService(props.id, props.user);
      if (!response) {
        toast.error("No se pudo obtener la respuesta.");
        return false;
      }
      props.close();
      toast.success("Usuario actualizado correctamente.");
      fetchUsers("");
      return true;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        return false;
      }
      toast.error("An unknown error occurred.");
      return false;
    }
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async (props: { user: Signup; close: () => void }) => {
    try {
      const response = await createUserService(props.user);
      if (!response) {
        toast.error("No se pudo obtener la respuesta.");
        return false;
      }
      props.close();
      toast.success("Usuario registrado correctamente.");
      return true;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        return false;
      }
      toast.error("An unknown error occurred.");
      return false;
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
