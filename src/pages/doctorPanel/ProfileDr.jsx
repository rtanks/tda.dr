// import { useSelector } from "react-redux";
import ProfileDetails from "../../components/generalComponent/ProfileDetails";
import ProfileMenu from "../../components/generalComponent/ProfileMenu";
import { useState } from "react";
import UserDoctorEdit from "../../components/doctorPanel/UserDoctorEdit";

export default function ProfileDr() {
    const [showEdit, setShowEdit] = useState(false)
    // const user = useSelector(state => state.loginInfo)
    return (
      <>
        {
          showEdit ? (
            <UserDoctorEdit onClick={() => setShowEdit(false)}/>
          ) : (
            <div className="w-[90%] mt-10 mx-auto flex flex-col gap-5 items-center">
              {/* <ProfileDetails name={user.fullName} experties={"متخصص ارتوپدی"} onClick={() => setShowEdit(true)}/> */}
              <ProfileDetails name={"دکتر اشکان حسنوندی"} experties={"متخصص ارتوپدی"} onClick={() => setShowEdit(true)}/>
              <ProfileMenu />
            </div>
          )
        }
      </>
    );
}
