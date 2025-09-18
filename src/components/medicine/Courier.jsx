import SelectedItem from "../generalComponent/SelectedItem";

export default function Courier() {
  return (
    <>
      <SelectedItem
        select={true}
        done={true}
        title={"اشکان حسنوندی "}
        text={"کارشناس بیهوشی"}
      />
      <SelectedItem
        select={false}
        title={"مونا بیرانوند"}
        text={"کارشناس پرستاری"}
      />
    </>
  );
}
