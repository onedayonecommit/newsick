import { fetchSongDetailInfo } from "@/middleware/fetchMusic"
import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    nmfmDetailInfo :{}
}

const nmDetailSlice = createSlice({
    name: "normalDetailSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSongDetailInfo.pending, () => { })
        builder.addCase(fetchSongDetailInfo.fulfilled, (state, action) => {
            if (action.payload) {
                state.nmfmDetailInfo = action.payload
            }
        })
    }
})

export const nmDetailAction = nmDetailSlice.actions

export default nmDetailSlice