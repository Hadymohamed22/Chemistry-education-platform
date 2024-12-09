import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit, deleteVideo, addVideo } from "../store/slices/VideosClassTwo";

function SecondClassVideos() {
  const videos = useSelector((store) => store.VideosClassTwoSlice);
  const [videoIndex, setVideoIndex] = useState();
  const editVideoForm = useRef();
  const addVideoForm = useRef();
  const videoLink = useRef();
  const newVideoLink = useRef();
  const dispatch = useDispatch();

  const openEditVideoForm = (video, index) => {
    editVideoForm.current.classList.add("open");
    setVideoIndex(index);
    videoLink.current.value = video.link;
  };
  const closeEditVideoForm = () => {
    if (videoIndex !== undefined && videoIndex !== null) {
      const newLink = videoLink.current.value.trim();
      if (newLink) {
        dispatch(edit({ index: videoIndex, link: newLink }));
      }
    }
    editVideoForm.current.classList.remove("open");
  };
  const deleteCurrentVideo = (index) => {
    setVideoIndex(index);
    if (videoIndex !== undefined && videoIndex !== null) {
      dispatch(deleteVideo(index));
    }
  };

  const openAddNewVideoForm = () => {
    addVideoForm.current.classList.add("open");
  };
  const addNewVideo = () => {
    const newLink = newVideoLink.current.value.trim();
    if (newLink) {
      dispatch(addVideo(newLink));
    }
    addVideoForm.current.classList.remove("open");
  };

  return (
    <div>
      <h3 className="font-bold text-3xl text-white text-center">
        شروحات الصف الثاني الثانوي
      </h3>
      <button
        type="button"
        class="block rounded mx-auto mt-3 bg-success  px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        onClick={openAddNewVideoForm}
      >
        أضف فديو جديد
      </button>
      <div className="container-center px-5 gap-5 grid grid-cols-1 md:grid-cols-3 mt-5">
        {videos.map((e, i) => {
          return (
            <div
              className="video-box  bg-success-400/50 rounded-lg p-5"
              key={i}
            >
              <div className="link font-bold text-center">
                <div className="text-white">
                  لينك الفديو:
                  <span className="text-black">...{e.link.slice(0, 20)}</span>
                </div>
              </div>
              <div className="buttons flex gap-3 items-center">
                <button
                  type="button"
                  className="mt-3 rounded-md bg-success px-6 pb-2 pt-2.5 text-xs font-bold w-full uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  onClick={() => {
                    openEditVideoForm(e, i);
                  }}
                >
                  تعديل
                </button>
                <button
                  type="button"
                  className="mt-3 rounded-md bg-danger px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-danger-3 transition duration-150 ease-in-out hover:bg-danger-accent-300 hover:shadow-danger-2 focus:bg-danger-accent-300 focus:shadow-danger-2 focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-danger-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  onClick={() => {
                    deleteCurrentVideo(i);
                  }}
                >
                  حذف
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="editVideo absolute w-full h-full bg-black/70 content-center top-0"
        ref={editVideoForm}
      >
        <form
          className="w-[360px] rounded-xl p-5 shadow-lg bg-gradient-to-br from-orange-600/70 via-[#0c82ea]/70 to-[#ea0c3c]/70"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label
            htmlFor="link"
            className="block text-white drop-shadow-orange font-bold mb-1 text-lg mt-3"
          >
            اللينك
          </label>
          <input
            type="text"
            id="link"
            placeholder="اللينك"
            className="w-full rounded-lg py-1 px-2 outline-none placeholder:text-sm"
            ref={videoLink}
          />
          <button
            className="w-full mt-5 px-6 py-2 text-white font-bold rounded-lg bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 transition duration-300 ease-in-out"
            onClick={closeEditVideoForm}
          >
            تعديل
          </button>
        </form>
      </div>
      <div
        className="addVideo absolute w-full h-full bg-black/70 content-center top-0"
        ref={addVideoForm}
      >
        <form
          className="w-[360px] rounded-xl p-5 shadow-lg bg-gradient-to-br from-orange-600/70 via-[#0c82ea]/70 to-[#ea0c3c]/70"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label
            htmlFor="link"
            className="block text-white drop-shadow-orange font-bold mb-1 text-lg mt-3"
          >
            اللينك
          </label>
          <input
            type="text"
            id="link"
            placeholder="اللينك"
            className="w-full rounded-lg py-1 px-2 outline-none placeholder:text-sm"
            ref={newVideoLink}
          />
          <button
            className="w-full mt-5 px-6 py-2 text-white font-bold rounded-lg bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 transition duration-300 ease-in-out"
            onClick={addNewVideo}
          >
            أضف
          </button>
        </form>
      </div>
    </div>
  );
}

export default SecondClassVideos;
