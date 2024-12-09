import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAdmin, removeAdmin } from "../store/slices/AdminsSlice";
import Swal from "sweetalert2";

function Admins() {
  const admins = useSelector((store) => store.adminSlice);
  const dispatch = useDispatch();
  let adminsArr = Object.values(admins);
  const addOwner = useRef();
  const adminName = useRef();
  const adminPass = useRef();
  const addOwnerFun = () => {
    if (
      adminName.current.value.length !== 0 &&
      adminPass.current.value.length !== 0
    ) {
      dispatch(
        addAdmin({
          username: adminName.current.value,
          pass: adminPass.current.value,
        })
      );
      closeAddOwnerForm();
      adminName.current.value = ``;
      adminPass.current.value = ``;
    } else {
      Swal.fire({
        icon: "error",
        title: "حدث خطأ ما",
        text: "اكمل البيانات",
      });
    }
  };
  const openAddOwnerForm = () => {
    addOwner.current.classList.add("open");
  };
  const closeAddOwnerForm = () => {
    addOwner.current.classList.remove("open");
  };
  return (
    <div>
      <h3 className="font-bold text-3xl text-white text-center">
        حسابات الملاك
      </h3>
      <button
        type="button"
        onClick={() => {
          openAddOwnerForm();
          console.log(adminsArr);
        }}
        class="mt-3 font-bold mx-auto w-fit block rounded bg-success px-6 pb-2 pt-2.5 text-xs uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      >
        اضف مالك جديد
      </button>
      <div
        className="add-owner absolute w-full h-full bg-black/70 content-center top-0"
        ref={addOwner}
      >
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
            ref={adminName}
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
            ref={adminPass}
          />
          <button
            class="w-full mt-5 px-6 py-2 text-white font-bold rounded-lg bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 transition duration-300 ease-in-out"
            onClick={addOwnerFun}
          >
            اضف
          </button>
        </form>
      </div>
      <div className="container-center px-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5">
        {adminsArr.map((admin, i) => {
          return (
            <div className="owner-box content-col-center bg-blue-400/50 rounded-lg p-5">
              <h4 className="text-xl mb-3 font-bold text-white">
                المالك {i + 1}
              </h4>
              <div className="username font-bold text-center">
                <span>اسم المستخدم : </span>
                <span>{admin.username}</span>
              </div>
              <div className="pass font-bold text-center">
                <span>كلمه المرور : </span>
                <span>{admin.pass}</span>
              </div>
              <button
                type="button"
                class="block mt-3 font-bold mx-auto rounded bg-danger px-6 pb-2 pt-2.5 text-xs uppercase leading-normal text-white shadow-danger-3 transition duration-150 ease-in-out hover:bg-danger-accent-300 hover:shadow-danger-2 focus:bg-danger-accent-300 focus:shadow-danger-2 focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-danger-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                onClick={() => {
                  dispatch(removeAdmin(i));
                }}
              >
                حذف
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Admins;
