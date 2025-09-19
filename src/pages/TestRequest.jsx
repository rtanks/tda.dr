import { useState } from "react";
import PatientInfo from "../components/PatientInfo";
import RequestAndExplain from "../components/RequestAndExplain";
import SearchBoxFull from "../components/generalComponent/SearchBoxFull";
import SelectItem from "../components/generalComponent/SelectItem";
import TestHeader from "../components/generalComponent/HeaderTest";
import TestLaboratory from "../components/test/TestLaboratory";
import TestDr from "../components/test/TestDr";
import TestInterPretation from "../components/test/TestInterpretation";
import TestSample from "../components/test/TestSample";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TestRequest() {
  const [selectItem, setSelectItem] = useState("پزشک");
  const getSelectedItem = (item) => {
    setSelectItem(item);
  };
  const items = useSelector(state => state.actions.test)

  const showItemSelected = () => {
    switch (selectItem) {
      case "پزشک":
        return <TestDr />;
      case "آزمایشگاه":
        return <TestLaboratory />;
      case "نمونه گیر":
        return <TestSample />;
      case "تفسیر":
        return <TestInterPretation />;
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <TestHeader
        title={"آزمایش"}
        onClick={() => navigate("/dashboard/need-for-action")}
      />
      <div className="w-[90%] mt-10 mx-auto flex flex-col gap-5 items-center">
        <PatientInfo
          name={"اشکان حسنوندی"}
          phoneNumber={"09216919291"}
          time={"14:45"}
          date={"1404/12/01"}
          nationalCode={"4060405531"}
          insurance={"آزاد"}
        />
        <RequestAndExplain
          typeRequest={"آزمایش"}
          titleRequest={"cbc - bun - cr - na - k"}
        />
        <div className="w-full flex flex-row gap-[10px]">
          <SelectItem
            onClick={getSelectedItem}
            selectItem={selectItem}
            status={items.doctor}
            title={"پزشک"}
          />
          <SelectItem
            onClick={getSelectedItem}
            selectItem={selectItem}
            status={items.laboratory}
            title={"آزمایشگاه"}
          />
          <SelectItem
            onClick={getSelectedItem}
            selectItem={selectItem}
            status={items.sample}
            title={"نمونه گیر"}
          />
          <SelectItem
            onClick={getSelectedItem}
            selectItem={selectItem}
            status={items.interPretation}
            title={"تفسیر"}
          />
        </div>
        <SearchBoxFull />
        <div className="w-full h-max flex flex-col gap-5 mb-6">
          {showItemSelected()}
        </div>
      </div>
    </>
  );
}
