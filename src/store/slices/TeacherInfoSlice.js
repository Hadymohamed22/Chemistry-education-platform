import { createSlice } from "@reduxjs/toolkit";

const teacherInfo = createSlice({
    name: "teacherInfo",
    initialState: JSON.parse(localStorage.getItem("TeacherInfo")) || [
        { name: "د. مي السعيد", exp: "10 سنوات في تدريس الكيمياء العضوية", qualifications: "دكتوراه في الكيمياء العضوية من جامعة القاهرة", moreInfo: "متخصصه في تبسيط المفاهيم المعقدة وتحفيز الطلاب على التفكير الإبداعي. قدم العديد من الورش التعليمية التي ساعدت الطلاب على فهم الكيمياء بشكل عملي" },
        { name: "أ. مروة حسن", exp: "7 سنوات في تدريس الكيمياء التحليلية", qualifications: "ماجستير في الكيمياء التحليلية من جامعة عين شمس", moreInfo: "لديها شغف بالتعليم العملي وتستخدم تجارب الكيمياء في الحياة اليومية لجعل المادة مشوقة ومفهومة" },
        { name: "د. محمد علاء", exp: "12 سنة في تدريس الكيمياء الفيزيائية", qualifications: "دكتوراه في الكيمياء الفيزيائية من جامعة الإسكندرية", moreInfo: "قدم دورات تدريبية متقدمة حول التطبيقات الفيزيائية للكيمياء وشارك في تأليف كتب تعليمية للطلاب الجامعيين" },
        { name: "أ. ليلى عبد الرحمن", exp: "5 سنوات في تدريس الكيمياء العامة للمرحلة الثانوية", qualifications: "تهتم بتشجيع الطلاب على التفوق الأكاديمي من خلال بناء أساس قوي في أساسيات الكيمياء", moreInfo: "تهتم بتشجيع الطلاب على التفوق الأكاديمي من خلال بناء أساس قوي في أساسيات الكيمياء." },
    ],
    reducers: {
        edit: (state, action) => {
            const { index, name, exp, qualifications, moreInfo } = action.payload;
            const updatedState = state.map((teacher, i) =>
                i === index
                    ? { ...teacher, name: name ?? teacher.name, exp: exp ?? teacher.exp, qualifications: qualifications ?? teacher.qualifications, moreInfo: moreInfo ?? teacher.moreInfo }
                    : teacher
            );
            console.log("Updated State:", updatedState);
            localStorage.setItem("TeacherInfo", JSON.stringify(updatedState));
            return updatedState;
        }
    }
})

export const { edit } = teacherInfo.actions

export default teacherInfo.reducer