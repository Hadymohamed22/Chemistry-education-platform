import { Link } from "react-router-dom";

function Hero({ mainText, subText, showBtn }) {
  return (
    <div className="hero h-screen relative content-col-center text-center">
      <div className="text relative z-10">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg drop-shadow-orange">
          {mainText}
        </h1>
        <p className="text-gray-200 text-base w-[100%] md:w-[80%] mx-auto mt-5">
          {subText}
        </p>
        {showBtn && (
          <Link
            to="classes"
            type="button"
            className="mt-5 text-xl font-bold inline-block rounded-full bg-warning px-6 pb-2 pt-2.5 transition-all uppercase leading-normal text-white shadow-warning-3 duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            ذاكر الان
          </Link>
        )}
      </div>
    </div>
  );
}
export default Hero;
