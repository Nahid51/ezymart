import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-hot-toast";
import auth from "../firebase.config";

const initialState = {
    username: "",
    email: "",
    role: "",
    isLoading: true,
    isError: false,
    error: ""
};

export const createUser = createAsyncThunk("auth/createUser", async ({ email, password, router }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    router.push("/");
    toast.success("Register successfully!");
    return data.user.email;
});

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password, router }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    router.push("/");
    toast.success("User successfully logged in !");
    return data.user.email;
});

export const googleLogin = createAsyncThunk("auth/googleLogin", async (router) => {
    const googleProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, googleProvider);
    router.push("/");
    toast.success("User successfully logged in!");
    return data.user.email;
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: (state) => {
            state.email = "";
        },
        setUser: (state, action) => {
            state.email = action.payload;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = action.payload;
                state.isError = false;
                state.error = "";
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.email = "";
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = action.payload;
                state.isError = false;
                state.error = "";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.email = "";
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(googleLogin.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(googleLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = action.payload;
                state.isError = false;
                state.error = "";
            })
            .addCase(googleLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.email = "";
                state.isError = true;
                state.error = action.error.message;
            })
    }
});

export const { logOut, setUser } = authSlice.actions;

export default authSlice.reducer;