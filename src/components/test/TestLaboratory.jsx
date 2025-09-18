import SelectedItem from "../generalComponent/SelectedItem";

export default function TestLaboratory() {
  return (
    <>
      <SelectedItem
        select={true}
        done={false}
        title={"آزمایشگاه نور"}
        text={"خیابان شریعتی - جنب پارک "}
      />
      <SelectedItem
        select={false}
        title={"آزمایشگاه پاستور"}
        text={"خیابان شریعتی - جنب پارک "}
      />
    </>
  );
}
