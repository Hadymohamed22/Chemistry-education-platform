function LastVideoBox({ text, link }) {
  return (
    <div className="box rounded-lg shadow-3 text-white h-[200px] text-3xl font-bold text-center transition duration-500 hover:scale-[1.05] hover:shadow-2xl  bg-[#D9991A] relative overflow-hidden">
      <a
        href={link}
        className="block content-center w-full h-full rounded-lg relative z-10"
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    </div>
  );
}
export default LastVideoBox;
