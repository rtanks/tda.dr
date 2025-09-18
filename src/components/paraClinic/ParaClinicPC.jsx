import SelectedItem from "../generalComponent/SelectedItem";

export default function ParaClinicPC() {
  return (
    <>
      <SelectedItem
        select={true}
        done={true}
        title={"مرکز تصویر برداری سپیدار"}
        text={"خیابان شریعتی - جنب پارک "}
      />
      <SelectedItem
        select={false}
        title={"مرکز رادیولوژی میهن"}
        text={"خیابان شریعتی - جنب پارک "}
      />
    </>
  );
}
