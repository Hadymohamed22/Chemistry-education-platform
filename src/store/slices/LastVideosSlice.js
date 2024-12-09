import { createSlice } from "@reduxjs/toolkit";

const LastVideosSlice = createSlice({
    name: "LastVideosSlice",
    initialState: JSON.parse(localStorage.getItem("lastVideos")) || [
        { title: "مراجعه العلوم المتكامله", link: "https://youtu.be/c6a90osLyy4?si=0X2G9IXeIEInnNxi" },
        { title: "الحساب الكميائي 3 ثانوي", link: "https://youtu.be/HoZVkF_-thI?si=3ze0o6xMpU7DzqhV" },
        { title: "مراجعه الباب الاول 2 ثانوي", link: "https://youtu.be/GoqnOmZA_9Q?si=6biQB6PjukxySZL7" }
    ],
    reducers: {
        edit: (state, action) => {
            const { index, title, link } = action.payload;
            const updatedState = state.map((video, i) =>
                i === index
                    ? { ...video, title: title ?? video.title, link: link ?? video.link }
                    : video
            );
            console.log("Updated State:", updatedState);
            localStorage.setItem("lastVideos", JSON.stringify(updatedState));
            return updatedState;
        }
    }
})

export const { edit } = LastVideosSlice.actions

export default LastVideosSlice.reducer