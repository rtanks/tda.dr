import SelectedItem from "../generalComponent/SelectedItem";

export default function TestDr() {
  return (
    <>
      <SelectedItem
        select={true}
        done={true}
        title={"دکتر مینا بیرانوند"}
        text={"دکترای تخصصی روانشناسی و مشاوره"}
      />
      <SelectedItem
        select={false}
        title={"دکتر مینا بیرانوند"}
        text={"دکترای تخصصی روانشناسی و مشاوره"}
      />
    </>
  );
}
