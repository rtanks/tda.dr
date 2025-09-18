import UserItem from "../components/dashboard/UserItem";

export default function NeedForAction() {
  return (
    <div className="w-full h-max flex flex-col mt-5 gap-5 bg-transparent">
      <div className="w-full h-max flex flex-col gap-2">
        <UserItem
          name={"اشکان حسنوندی"}
          number={"325475"}
          time={"14:45"}
          date={"1404/12/01"}
          style={"border-b md:border-0 border-b-[#e0e0e0]"}
        />
        <UserItem
          name={"اشکان حسنوندی"}
          number={"6251478"}
          time={"14:45"}
          date={"1404/12/01"}
          style={"border-b md:border-0 border-b-[#e0e0e0]"}
        />
        <UserItem
          name={"اشکان حسنوندی"}
          number={"6255412"}
          time={"14:45"}
          date={"1404/12/01"}
        />
      </div>
    </div>
  );
}
