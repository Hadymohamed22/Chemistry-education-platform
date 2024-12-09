import { configureStore } from "@reduxjs/toolkit";
import adminSlice from './slices/AdminsSlice'
import LastVideos from "./slices/LastVideosSlice";
import teacherInfo from "./slices/TeacherInfoSlice";
import VideosClassOne from "./slices/VideosClassOne";
import VideosClassTwo from "./slices/VideosClassTwo";
import VideosClassThree from "./slices/VideosClassThree";

export const store = configureStore({
    reducer: {
        adminSlice: adminSlice,
        lastVideosSlice: LastVideos,
        teacherInfoSlice: teacherInfo,
        VideosClassOneSlice: VideosClassOne,
        VideosClassTwoSlice: VideosClassTwo,
        VideosClassThreeSlice: VideosClassThree,
    }
})