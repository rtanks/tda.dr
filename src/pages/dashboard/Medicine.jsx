import { useState } from "react";
import PatientInfo from "../../components/PatientInfo";
import RequestAndExplain from "../../components/RequestAndExplain";
import SearchBoxFull from "../../components/generalComponent/SearchBoxFull";
import SelectItem from "../../components/generalComponent/SelectItem";
import TestHeader from "../../components/generalComponent/HeaderTest";
import MedicineDr from "../../components/medicine/MedicineDr";
import Drugstore from "../../components/medicine/Drugstore";
import Courier from "../../components/medicine/Courier";
import MedicineInterPretation from "../../components/medicine/MedicineInterpretation";
import { useSelector } from "react-redux";

export default function Medicine({onClick}) {
  const [selectItem, setSelectItem] = useState("پزشک");
  const getSelectedItem = (item) => {
    setSelectItem(item);
  };
 const items = useSelector(state => state.actions.medicine);

  const showItemSelected = () => {
    switch (selectItem) {
      case "پزشک":
        return <MedicineDr/>;
      case "داروخانه":
        return <Drugstore/>;
      case "پیک":
        return <Courier/>;
      case "تفسیر":
        return <MedicineInterPretation/>;
    }
  };

  return (
    <div className="w-full h-full bg-white vazir-medium fixed left-0 top-0 z-50 overflow-y-scroll">
      <div className="w-[402px] mx-auto">
        <TestHeader
          title={"دارو"}
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
            titleRequest={"شربت مترونیدازول 500 میلی گرم - آمپول جنتامایشین 300"}
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
              status={items.drugstore.status}
              doneStatus={items.drugstore.doneStatus}
              title={"داروخانه"}
            />
            <SelectItem
              onClick={getSelectedItem}
              selectItem={selectItem}
              status={items.courier.status}
              doneStatus={items.courier.doneStatus}
              title={"پیک"}
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
