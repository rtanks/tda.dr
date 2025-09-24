import { useState } from "react";
import PatientInfo from "../../components/PatientInfo";
import RequestAndExplain from "../../components/RequestAndExplain";
import SearchBoxFull from "../../components/generalComponent/SearchBoxFull";
import SelectItem from "../../components/generalComponent/SelectItem";
import TestHeader from "../../components/generalComponent/HeaderTest";
import TestLaboratory from "../../components/test/TestLaboratory";
import TestDr from "../../components/test/TestDr";
import TestInterPretation from "../../components/test/TestInterpretation";
import TestSample from "../../components/test/TestSample";
import { useSelector } from "react-redux";

export default function TestRequest({onClick}) {
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

  return (
    <div className="w-full h-full bg-white vazir-medium fixed left-0 top-0 z-50 overflow-y-scroll">
      <div className="w-[402px] mx-auto">
        <TestHeader
          title={"آزمایش"}
          onClick={onClick}
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
              status={items.doctor.status}
              doneStatus={items.doctor.doneStatus}
              title={"پزشک"}
            />
            <SelectItem
              onClick={getSelectedItem}
              selectItem={selectItem}
              status={items.laboratory.status}
              doneStatus={items.laboratory.doneStatus}
              title={"آزمایشگاه"}
            />
            <SelectItem
              onClick={getSelectedItem}
              selectItem={selectItem}
              status={items.sample.status}
              doneStatus={items.sample.doneStatus}
              title={"نمونه گیر"}
            />
            <SelectItem
              onClick={getSelectedItem}
              selectItem={selectItem}
              status={items.interpretation.status}
              doneStatus={items.interpretation.doneStatus}
              title={"تفسیر"}
            />
          </div>
          <SearchBoxFull />
          <div className="w-full h-max flex flex-col gap-5 mb-6">
            {showItemSelected()}
          </div>
        </div>
      </div>
    </div>
  );
}
