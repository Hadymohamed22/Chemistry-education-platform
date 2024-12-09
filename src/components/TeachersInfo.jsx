import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../store/slices/TeacherInfoSlice";

function TeacherInfo() {
  const [teacherIndex, setTeacherIndex] = useState();
  const teachers = useSelector((store) => store.teacherInfoSlice);
  const dispatch = useDispatch();
  const editTeacherInfo = useRef();
  const teacherName = useRef();
  const teacherExp = useRef();
  const teacherQualifications = useRef();
  const teacherMoreInfo = useRef();

  const openTeacherInfoForm = (teacher, index) => {
    editTeacherInfo.current.classList.add("open");
    teacherName.current.value = teacher.name;
    teacherExp.current.value = teacher.exp;
    teacherQualifications.current.value = teacher.qualifications;
    teacherMoreInfo.current.value = teacher.moreInfo;
    setTeacherIndex(index);
  };
  const closeTeacherInfoForm = () => {
    let teacherNameValue = teacherName.current.value;
    let teacherExpValue = teacherExp.current.value;
    let teacherQualificationsValue = teacherQualifications.current.value;
    let teacherMoreInfoValue = teacherMoreInfo.current.value;
    if (teacherIndex !== undefined && teacherIndex !== null) {
      dispatch(
        edit({
          index: teacherIndex,
          name: teacherNameValue,
          exp: teacherExpValue,
          qualifications: teacherQualificationsValue,
          moreInfo: teacherMoreInfoValue,
        })
      );
    }
    editTeacherInfo.current.classList.remove("open");
  };

  return (
    <div>
      <h3 className="font-bold text-3xl text-white text-center">
        معلومات عن المدرسين
      </h3>
      <div className="container-center px-5 gap-5 grid grid-cols-1 md:grid-cols-2 mt-5">
        {teachers.map((e, i) => {
          return (
            <div className="teacher-box  bg-info-400/50 rounded-lg p-5" key={i}>
              <div className="name font-bold ">
                <span className="text-white">اسم المدرس: </span>
                <span>{e.name}</span>
              </div>
              <div className="exp font-bold ">
                <span className="text-white">الخبره: </span>
                <span>{e.exp}</span>
              </div>
              <div className="qualifications font-bold ">
                <span className="text-white">المؤهلات: </span>
                <span>{e.qualifications.slice(0, 50)}...</span>
              </div>
              <div className="info font-bold ">
                <span className="text-white">نبذه: </span>
                <span>{e.moreInfo.slice(0, 35)}...</span>
              </div>
              <button
                type="button"
                className="block mt-3 rounded-full bg-info px-6 pb-2 pt-2.5 text-xs font-bold w-full uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                onClick={() => {
                  openTeacherInfoForm(e, i);
                }}
              >
                تعديل
              </button>
            </div>
          );
        })}
      </div>
      <div
        className="editTeacherInfo absolute w-full h-full bg-black/70 content-center top-0"
        ref={editTeacherInfo}
      >
        <form
          className="w-[360px] rounded-xl p-5 shadow-lg bg-gradient-to-br from-orange-600 via-[#0c82ea] to-[#ea0c3c]"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label
            htmlFor="name"
            className="block text-white drop-shadow-orange font-bold mb-1 text-lg"
          >
            الاسم
          </label>
          <input
            type="text"
            id="name"
            placeholder="الاسم"
            className="w-full rounded-lg py-1 px-2 outline-none placeholder:text-sm"
            ref={teacherName}
          />
          <label
            htmlFor="exp"
            className="block text-white drop-shadow-orange font-bold mb-1 text-lg mt-3"
          >
            الخبره
          </label>
          <input
            type="text"
            id="exp"
            placeholder="الخبره"
            className="w-full rounded-lg py-1 px-2 outline-none placeholder:text-sm"
            ref={teacherExp}
          />
          <label
            htmlFor="qualifications"
            className="block text-white drop-shadow-orange font-bold mb-1 text-lg mt-3"
          >
            المؤهلات
          </label>
          <input
            type="text"
            id="qualifications"
            placeholder="المؤهلات"
            className="w-full rounded-lg py-1 px-2 outline-none placeholder:text-sm"
            ref={teacherQualifications}
          />
          <label
            htmlFor="moreInfo"
            className="block text-white drop-shadow-orange font-bold mb-1 text-lg mt-3"
          >
            نبذه
          </label>
          <input
            type="text"
            id="moreInfo"
            placeholder="نبذه"
            className="w-full rounded-lg py-1 px-2 outline-none placeholder:text-sm"
            ref={teacherMoreInfo}
          />
          <button
            className="w-full mt-5 px-6 py-2 text-white font-bold rounded-lg bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 transition duration-300 ease-in-out"
            onClick={closeTeacherInfoForm}
          >
            تعديل
          </button>
        </form>
      </div>
    </div>
  );
}

export default TeacherInfo;
