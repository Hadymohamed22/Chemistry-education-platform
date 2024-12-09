import { createSlice } from "@reduxjs/toolkit";

const VideosClassOne = createSlice({
    name: "VideosClassOne",
    initialState: JSON.parse(localStorage.getItem("VideosClassOne")) || [
        { link: "https://www.youtube.com/embed/G5D4RgluWIU?si=UnPvz0CTl1hY5-IQ" },
        { link: "https://www.youtube.com/embed/m3RxMm8SMDY?si=lvF7jUGJXfz5A7sp" },
        { link: "https://www.youtube.com/embed/xk2x1ysgFck?si=d4K9qxeUIIKCUCW7" },
        { link: "https://www.youtube.com/embed/J9we63pIhMg?si=kl0aw7R0LGRPF_VW" },
        { link: "https://www.youtube.com/embed/Lr_U79fFVzk?si=WKOpYvyftXo2DLNV" },
        { link: "https://www.youtube.com/embed/n-jOKEqm3Ps?si=g3cqGAVtOflfIpPZ" },
    ],
    reducers: {
        edit: (state, action) => {
            const { index, link } = action.payload;
            const updatedState = state.map((video, i) =>
                i === index
                    ? { ...video, link: link ?? video.link }
                    : video
            );
            localStorage.setItem("VideosClassOne", JSON.stringify(updatedState));
            return updatedState;
        },
        deleteVideo: (state, action) => {
            let index = action.payload
            let updateState = state.filter((e, i) => i !== index)
            localStorage.setItem("VideosClassOne", JSON.stringify(updateState))
            return updateState
        },
        addVideo: (state, action) => {
            const newVideoLink = action.payload
            state.push({ link: newVideoLink })
            localStorage.setItem("VideosClassOne", JSON.stringify(state))
        }
    }
})

export const { edit, deleteVideo, addVideo } = VideosClassOne.actions

export default VideosClassOne.reducer