import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import { useSelector } from "react-redux";

function FirstClass() {
  const videos = useSelector((store) => store.VideosClassOneSlice);
  const navigate = useNavigate();
  return (
    <div className="first-class">
      <Hero
        mainText="الصف الاول الثانوي"
        subText="ابدأ رحلة تعلم الكيمياء اليوم مع أفضل الخبراء، ودعنا نساعدك في تحقيق التفوق!"
      />
      <div className="videos my-10">
        <div className="section-header font-extrabold text-5xl mb-12 text-center">
          شروحات <br /> <span>الصف الاول الثانوي</span>
        </div>
        <div className="section-content">
          <div className="container-center px-5 grid grid-cols-1 md:grid-cols-2 gap-10">
            {videos.map((e, i) => {
              return (
                <div
                  className="box rounded-xl shadow-3 shadow-orange-400/25"
                  key={i}
                >
                  <div className="video w-full h-[350px]">
                    <iframe
                      className="w-full h-full rounded-xl"
                      src={e.link}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button
        className="bg-gradient-to-r from-red-500 via-red-400 to-yellow-500 text-white font-medium py-2 px-4 rounded-lg hover:from-yellow-500 hover:via-red-400 hover:to-red-500 transform hover:scale-105 transition duration-300 hover:shadow-3 mx-auto mb-10 block"
        onClick={() => {
          navigate(-1);
        }}
      >
        الرجوع للصفوف
      </button>
    </div>
  );
}
export default FirstClass;
