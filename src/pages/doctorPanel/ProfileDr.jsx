import ProfileDetails from "../../components/doctorPanel/ProfileDetails";
import ProfileMenu from "../../components/doctorPanel/ProfileMenu";
export default function ProfileDr() {
  return (
    <div className="w-[90%] mt-10 mx-auto flex flex-col gap-5 items-center">
      <ProfileDetails name={"اشکان حسنوندی"} experties={"متخصص ارتوپدی"} />
      <ProfileMenu />
    </div>
  );
}
