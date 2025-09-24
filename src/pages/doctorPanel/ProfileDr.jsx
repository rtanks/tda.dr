import ProfileDetails from "../../components/generalComponent/ProfileDetails";
import ProfileMenu from "../../components/generalComponent/ProfileMenu";
import UserEdit from "../../components/UserEdit";
import { useState } from "react";

export default function ProfileDr() {
  const [showEdit, setShowEdit] = useState(false)
    return (
      <>
        {
          showEdit ? (
            <UserEdit onClick={() => setShowEdit(false)}/>
          ) : (
            <div className="w-[90%] mt-10 mx-auto flex flex-col gap-5 items-center">
              <ProfileDetails name={"اشکان حسنوندی"} experties={"متخصص ارتوپدی"} onClick={() => setShowEdit(true)}/>
              <ProfileMenu />
            </div>
          )
        }
      </>
    );
}
