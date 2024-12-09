import { Link } from "react-router-dom";
import FeatureBox from "../components/FeatureBox";
import Hero from "../components/Hero";
import LastVideoBox from "../components/LastVideoBox";
import Teacher from "../components/Teacher";
import teacherImg1 from "../assets/teacher-1.webp";
import teacherImg2 from "../assets/teacher-2.webp";
import teacherImg3 from "../assets/teacher-3.webp";
import teacherImg4 from "../assets/teacher-4.webp";
import { useSelector } from "react-redux";

function Home() {
  const store = useSelector((store) => store);
  const teacherImages = [teacherImg1, teacherImg2, teacherImg3, teacherImg4];
  return (
    <div className="home-page">
      <Hero
        mainText="
          اهلا بكم في منصه ذاكر كميا"
        subText="
          احصل على شرح مفصل للتجارب والمفاهيم الكيميائية مع أدوات تفاعلية تناسب
          جميع المستويات في المرحله الثانويه"
        showBtn={true}
      />
      <section className="features my-10">
        <div className="section-header font-extrabold text-5xl mb-12 text-center">
          لماذا <span>تختارنا</span>
        </div>
        <div className="container-center grid grid-cols-1 md:grid-cols-2 gap-5 lg:px-7">
          <FeatureBox
            icon="books"
            mainText="فهم الكيمياء أصبح أسهل!"
            subText="
        نقدم لك محتوى تعليمي مبسط وشامل يغطي جميع جوانب مادة الكيمياء، بدءًا من
        الأساسيات وصولًا إلى المفاهيم المتقدمة. سواء كنت مبتدئًا أو متقدمًا،
        ستجد ما يناسب مستواك الدراسي."
          />
          <FeatureBox
            icon="flask"
            mainText="التعلم بالعمل هو الأفضل!"
            subText="يمكنك محاكاة التجارب الكيميائية من خلال أدوات تفاعلية مبتكرة. استمتع بتجربة عملية داخل بيئة آمنة وواقعية، مما يساعدك على فهم المفاهيم بشكل أعمق."
          />
          <FeatureBox
            icon="notebook"
            mainText="كل ما تحتاجه في مكان واحد!"
            subText="استمتع بالوصول إلى مكتبة غنية بالمقالات، الفيديوهات التعليمية، الرسوم البيانية، والملفات التفاعلية التي تساعدك على تعميق معرفتك بكل جوانب الكيمياء."
          />
          <FeatureBox
            icon="chat"
            mainText="دائمًا هنا لمساعدتك!"
            subText="يضمن فريق الدعم لدينا مساعدتك في أي وقت. سواء كان لديك استفسار فني أو سؤال أكاديمي، نحن دائمًا في خدمتك للإجابة على جميع استفساراتك بسرعة."
          />
        </div>
      </section>

      <section className="last-videos my-10 bg-gray-200 py-10">
        <div className="section-header font-extrabold text-5xl mb-12 text-center">
          اخر <span>الشروحات</span>
        </div>
        <div className="container-center grid grid-cols-1 md:grid-cols-3 gap-5 lg:px-4">
          {store.lastVideosSlice.map((e, i) => {
            return <LastVideoBox key={i} text={e.title} link={e.link} />;
          })}
        </div>
        <Link
          to="classes"
          type="button"
          className="block w-fit mx-auto mt-10 rounded bg-warning px-6 pb-2 pt-2.5 text-base font-bold uppercase leading-normal text-white shadow-warning-3 transition duration-500 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        >
          جميع الفيديوهات
        </Link>
      </section>

      <section className="expert-teacher my-10">
        <div className="section-header font-extrabold text-5xl mb-12 text-center">
          مجموعه من <br /> <span>المدرسين الخبراء</span>
        </div>
        <div className="section-content">
          <div className="container-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-5 mb-14">
            {store.teacherInfoSlice.map((e, i) => {
              return (
                <Teacher
                  teacherPhoto={teacherImages[i]}
                  teacherName={e.name}
                  teacherExp={e.exp}
                  teacherQualifications={e.qualifications}
                  teacherInfo={e.moreInfo}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
