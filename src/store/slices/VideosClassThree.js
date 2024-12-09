import { createSlice } from "@reduxjs/toolkit";

const VideosClassThree = createSlice({
    name: "VideosClassThree",
    initialState: JSON.parse(localStorage.getItem("VideosClassThree")) || [
        { link: "https://www.youtube.com/embed/A6BdrG0vasg?si=QiwJjVN4Qu0SiyLj" },
        { link: "https://www.youtube.com/embed/Xt7lXfs6Ces?si=7e7C9bn7JA6oFaS2" },
        { link: "https://www.youtube.com/embed/ZkoZnbS1nZg?si=IySSVC2LmdI5oFJn" },
        { link: "https://www.youtube.com/embed/jeiWXySXdGw?si=L0nkp_UnQmhe_ab-" },
        { link: "https://www.youtube.com/embed/h_xvYIMn_ls?si=C8hUfe9Y1XnJ41jO" },
        { link: "https://www.youtube.com/embed/cxclkL7-DdA?si=GNUwVC4iPCI3TfDA" },
    ],
    reducers: {
        edit: (state, action) => {
            const { index, title, link } = action.payload;
            const updatedState = state.map((video, i) =>
                i === index
                    ? { ...video, title: title ?? video.title, link: link ?? video.link }
                    : video
            );
            localStorage.setItem("VideosClassThree", JSON.stringify(updatedState));
            return updatedState;
        }, deleteVideo: (state, action) => {
            let index = action.payload
            let updateState = state.filter((e, i) => i !== index)
            localStorage.setItem("VideosClassThree", JSON.stringify(updateState))
            return updateState
        },
        addVideo: (state, action) => {
            const newVideoLink = action.payload
            state.push({ link: newVideoLink })
            localStorage.setItem("VideosClassThree", JSON.stringify(state))
        }
    }
})

export const { edit, deleteVideo, addVideo } = VideosClassThree.actions

export default VideosClassThree.reducer