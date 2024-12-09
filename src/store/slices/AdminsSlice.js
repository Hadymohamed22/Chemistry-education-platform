import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "adminSlice",
    initialState: JSON.parse(localStorage.getItem("admins")) || [{ username: "admin", pass: "1234" }, { username: "hady", pass: "5678" }],
    reducers: {
        addAdmin: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("admins", JSON.stringify(state));
        },
        removeAdmin: (state, action) => {
            let adminIndex = action.payload;
            const updatedState = state.filter((e, i) => i !== adminIndex);
            localStorage.setItem("admins", JSON.stringify(updatedState));
            return updatedState;
        }
    }
})

export const { addAdmin, removeAdmin } = adminSlice.actions

export default adminSlice.reducer