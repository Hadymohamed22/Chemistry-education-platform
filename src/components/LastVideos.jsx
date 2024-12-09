import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../store/slices/LastVideosSlice";

function LastVideos() {
  const [videoIndex, setVideoIndex] = useState();
  const lastVideos = useSelector((store) => store.lastVideosSlice);
  const editVideoForm = useRef();
  const videoTitle = useRef();
  const videoLink = useRef();
  const dispatch = useDispatch();

  const openEditVideoForm = (video, index) => {
    editVideoForm.current.classList.add("open");
    videoTitle.current.value = video.title;
    videoLink.current.value = video.link;
    setVideoIndex(index);
  };
  const closeEditVideoForm = () => {
    let videoTitleValue = videoTitle.current.value;
    let videoLinkValue = videoLink.current.value;
    if (videoIndex !== undefined && videoIndex !== null) {
      dispatch(
        edit({
          index: videoIndex,
          title: videoTitleValue,
          link: videoLinkValue,
        })
      );
    }
    editVideoForm.current.classList.remove("open");
  };

  return (
    <div>
      <h3 className="font-bold text-3xl text-white text-center">
        اخر الشروحات
      </h3>
      <div className="container-center px-5 gap-5 grid grid-cols-1 md:grid-cols-2 mt-5">
        {lastVideos.map((e, i) => {
          return (
            <div
              className="last-video-box  bg-orange-400/50 rounded-lg p-5"
              key={i}
            >
              <div className="title font-bold text-center">
                <span className="text-white">عنوان الفديو : </span>
                <span>{e.title}</span>
              </div>
              <div className="link font-bold text-center">
                <span className="text-white">لينك الفديو: </span>
                <span>...{e.link.slice(0, 20)}</span>
              </div>
              <button
                type="button"
                className="block mt-3 rounded-full bg-warning px-6 pb-2 pt-2.5 text-xs font-bold w-full uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                onClick={() => {
                  openEditVideoForm(e, i);
                }}
              >
                تعديل
              </button>
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
            htmlFor="title"
            className="block text-white drop-shadow-orange font-bold mb-1 text-lg"
          >
            العنوان
          </label>
          <input
            type="text"
            id="title"
            placeholder="العنوان"
            className="w-full rounded-lg py-1 px-2 outline-none placeholder:text-sm"
            ref={videoTitle}
          />
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
    </div>
  );
}

export default LastVideos;
