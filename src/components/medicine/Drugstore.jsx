import SelectedItem from "../generalComponent/SelectedItem";

export default function Drugstore() {
  return (
    <>
      <SelectedItem
        select={true}
        done={true}
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
