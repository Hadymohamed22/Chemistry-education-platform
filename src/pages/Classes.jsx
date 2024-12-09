import { Link } from "react-router-dom";
import Hero from "../components/Hero";

function Classes() {
  return (
    <div className="classes-page">
      <Hero
        mainText="مفتاح فهم الكيمياء يبدأ هنا"
        subText="مع مدرسينا المتميزين، ستتعلم الكيمياء بأسلوب شيق وعملي يمهد لك طريق النجاح الأكاديمي."
        showBtn={false}
      />
      <div className="classes my-10">
        <div className="section-header font-extrabold text-5xl mb-12 text-center">
          جميع <span>الصفوف</span>
        </div>
        <div className="content-container grid grid-cols-1 lg:grid-cols-3 gap-7 md:px-0 mx-5">
          <div className="box rounded-3xl h-[250px] transition-all duration-500 overflow-hidden hover:scale-[1.03] hover:rotate-[2deg] hover:shadow-lg">
            <Link
              to="first-class"
              className="w-full h-full p-5 border-orange-400 rounded-3xl content-center text-5xl font-bold drop-shadow-orange text-center relative z-10 text-white  border-[4px] border-dashed"
            >
              الصف الاول الثانوي
            </Link>
          </div>
          <div className="box rounded-3xl h-[250px] transition-all duration-500 overflow-hidden hover:scale-[1.03] hover:shadow-lg">
            <Link
              to="second-class"
              className="w-full h-full p-5 border-orange-400 rounded-3xl content-center text-5xl font-bold drop-shadow-orange text-center relative z-10 text-white  border-[4px] border-dashed"
            >
              الصف الثاني الثانوي
            </Link>
          </div>
          <div className="box rounded-3xl h-[250px] transition-all duration-500 overflow-hidden hover:scale-[1.03] hover:rotate-[-2deg] hover:shadow-lg">
            <Link
              to="third-class"
              className="w-full h-full p-5 border-orange-400 rounded-3xl content-center text-5xl font-bold drop-shadow-orange text-center relative z-10 text-white  border-[4px] border-dashed"
            >
              الصف الثالث الثانوي
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Classes;
