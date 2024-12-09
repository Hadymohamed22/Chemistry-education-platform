import { createSlice } from "@reduxjs/toolkit";

const VideosClassTwo = createSlice({
    name: "VideosClassTwo",
    initialState: JSON.parse(localStorage.getItem("VideosClassTwo")) || [
        { link: "https://www.youtube.com/embed/dtoYCuAs4rk?si=CjSjQ0Ji2QC8MK6r" },
        { link: "https://www.youtube.com/embed/pyAyPL_YNWA?si=7NeI7CPaR9uBSycu" },
        { link: "https://www.youtube.com/embed/8LEA6zWSK9U?si=dcwMT4VKKLX3Qu-K" },
        { link: "https://www.youtube.com/embed/y6mPCEilQxQ?si=beQKy5TMywHkavWZ" },
        { link: "https://www.youtube.com/embed/cpLF921cmqc?si=KjvwX6ZKBSrXMxY2" },
        { link: "https://www.youtube.com/embed/Y3H-IC_F1-Q?si=EAbsUh4GhHnwzOZV" },
    ],
    reducers: {
        edit: (state, action) => {
            const { index, title, link } = action.payload;
            const updatedState = state.map((video, i) =>
                i === index
                    ? { ...video, title: title ?? video.title, link: link ?? video.link }
                    : video
            );
            localStorage.setItem("VideosClassTwo", JSON.stringify(updatedState));
            return updatedState;
        },
        deleteVideo: (state, action) => {
            let index = action.payload
            let updateState = state.filter((e, i) => i !== index)
            localStorage.setItem("VideosClassTwo", JSON.stringify(updateState))
            return updateState
        },
        addVideo: (state, action) => {
            const newVideoLink = action.payload
            state.push({ link: newVideoLink })
            localStorage.setItem("VideosClassTwo", JSON.stringify(state))
        }
    }
})

export const { edit, deleteVideo, addVideo } = VideosClassTwo.actions

export default VideosClassTwo.reducer