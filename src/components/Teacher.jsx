function Teacher({
  teacherPhoto,
  teacherName,
  teacherExp,
  teacherQualifications,
  teacherInfo,
}) {
  return (
    <div className="teacher-box relative rounded-2xl shadow-xl border-2 border-dashed border-[#d9991a]">
      <div className="teacher-photo m-1">
        <img
          src={teacherPhoto}
          alt="teacher-photo"
          className="w-full rounded-2xl h-[450px]"
        />
      </div>
      <div className="teacher-info absolute top-0 left-0 w-full h-full rounded-2xl bg-black/70 flex content-col-center px-3">
        <h4 className="teacher-name text-3xl text-[#0EB9C7] mb-3 font-bold">
          {teacherName}
        </h4>
        <p className="experience text-lg text-white text-center content-col-center">
          <span className="text-[#0EB9C7] font-bold">الخبره : </span>
          <span className="text-sm">{teacherExp}</span>
        </p>
        <p className="qualifications text-lg text-white text-center content-col-center my-3">
          <span className="text-[#0EB9C7] font-bold">المؤهلات : </span>
          <span className="text-sm">{teacherQualifications}</span>
        </p>
        <p className="info text-lg text-white text-center content-col-center">
          <span className="text-[#0EB9C7] font-bold">نبذه : </span>
          <span className="text-sm">{teacherInfo}</span>
        </p>
      </div>
    </div>
  );
}

export default Teacher;
