import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import Swal from "sweetalert2";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const admins = useSelector((store) => store.adminSlice);
  const loginForm = useRef();
  const username = useRef();
  const pass = useRef();
  const navigationMenu = useRef();
  const checkLogin = () => {
    let isValid = admins.some(
      (e) =>
        e.username === username.current.value && e.pass === pass.current.value
    );
    if (isValid) {
      loginForm.current.classList.add("close");
    } else {
      Swal.fire({
        icon: "error",
        title: "حدث خطأ ما",
        text: "اسم المستخدم او كلمه المرور غير صحيحه",
      });
    }
  };

  return (
    <div className="dashboard md:h-screen md:w-screen relative bg-black overflow-hidden">
      <div className="ball w-[400px] h-[400px] bg-orange-600/50 rounded-full mx-auto mt-5 "></div>
      <div className="ball-2 w-[400px] h-[400px] bg-[#0c82ea]/50 rounded-full mx-auto mt-5 "></div>
      <div className="ball-3 w-[400px] h-[400px] bg-[#ea0c3c]/50 rounded-full mx-auto mt-5 "></div>
      <div className="content relative z-10  backdrop-blur-2xl w-screen md:h-screen flex">
        <div
          className="navigation px-2 right-[-254px] md:right-0 md:w-[16%] md:relative w-[250px] md:bg-gradient-to-br md:from-[#FFDEE9]/70 md:to-[#B5FFFC]/70  shadow-xl shadow-white/50 fixed h-screen z-[2] bg-white/90 transition-all duration-700"
          ref={navigationMenu}
        >
          <div className="logo content-center py-5 content-col-center">
            <Link to={"/"}>
              <img
                src={logo}
                alt="logo-img"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Link>
            <ul className="m-0 p-0 content-col-center gap-2 mt-5">
              <li className="content-center">
                <Link to="/dashboard" className="font-bold text-center text-lg">
                  حسابات الملاك
                </Link>
              </li>
              <li className="content-center">
                <Link
                  to="last-videos"
                  className="font-bold text-center text-lg"
                >
                  اخر الشروحات
                </Link>
              </li>
              <li className="content-center">
                <Link to="teachers" className="font-bold text-center text-lg">
                  المعلمون
                </Link>
              </li>
              <li className="content-center">
                <Link
                  to="first-class-videos"
                  className="font-bold text-center text-lg"
                >
                  الصف الاول الثانوي
                </Link>
              </li>
              <li className="content-center">
                <Link
                  to="second-class-videos"
                  className="font-bold text-center text-lg"
                >
                  الصف الثاني الثانوي
                </Link>
              </li>
              <li className="content-center">
                <Link
                  to="third-class-videos"
                  className="font-bold text-center text-lg"
                >
                  الصف الثالث الثانوي
                </Link>
              </li>
            </ul>
            <div
              className="open-nav w-[40px] h-[30px] py-2 pl-2 cursor-pointer flex rounded-e-full justify-end bg-white/90 absolute top-[50px] left-[-40px] z-50 md:hidden"
              onClick={() => {
                navigationMenu.current.classList.toggle("open");
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
        <div className="edit-content md:w-[84%] w-full md:h-screen h-full relative">
          <h1 className="text-white text-center font-extrabold drop-shadow-orange text-7xl pt-10">
            لوحه التحكم
          </h1>
          <div className="mt-7">
            <Outlet />
          </div>
        </div>
        <div
          className="login-dashboard absolute w-screen h-screen bg-white content-col-center z-50"
          ref={loginForm}
        >
          <h3 className="font-bold text-center text-4xl drop-shadow-orange text-black mb-7">
            التسجيل للوحه التحكم
          </h3>
          <form
            className="w-[360px] rounded-xl p-5 shadow-lg bg-gradient-to-br from-orange-600/70 via-[#0c82ea]/70 to-[#ea0c3c]/70"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label
              htmlFor="username"
              className="block text-white drop-shadow-orange font-bold mb-1 text-lg"
            >
              اسم المستخدم
            </label>
            <input
              type="text"
              id="username"
              placeholder="اسم المستخدم"
              className="w-full rounded-lg py-1 px-2 outline-none placeholder:text-sm"
              ref={username}
            />
            <label
              htmlFor="pass"
              className="block text-white drop-shadow-orange font-bold mb-1 text-lg mt-3"
            >
              كلمه المرور
            </label>
            <input
              type="password"
              id="pass"
              placeholder="كلمه المرور"
              className="w-full rounded-lg py-1 px-2 outline-none placeholder:text-sm"
              ref={pass}
            />
            <button
              onClick={checkLogin}
              class="w-full mt-5 px-6 py-2 text-white font-bold rounded-lg bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 transition duration-300 ease-in-out"
            >
              دخول
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
