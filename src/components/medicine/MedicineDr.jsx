import SelectedItem from "../generalComponent/SelectedItem";

export default function MedicineDr() {
  return (
    <>
      <SelectedItem
        select={true}
        done={false}
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
