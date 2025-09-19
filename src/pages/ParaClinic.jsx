import { useState } from "react";
import PatientInfo from "../components/PatientInfo";
import RequestAndExplain from "../components/RequestAndExplain";
import SearchBoxFull from "../components/generalComponent/SearchBoxFull";
import SelectItem from "../components/generalComponent/SelectItem";
import TestHeader from "../components/generalComponent/HeaderTest";
import ParaClinicDr from "../components/paraClinic/ParaClinicDr";
import ParaClinicPC from "../components/paraClinic/ParaClinicPC";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ParaClinic() {
  const navigate = useNavigate();
  const [selectItem, setSelectItem] = useState("پزشک");
  const getSelectedItem = (item) => {
    setSelectItem(item);
  };
  const items = useSelector(state => state.actions.paraClinic);

  return (
    <>
      <TestHeader
        title={"پاراکلینیک"}
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
          typeRequest={"گرافی"}
          titleRequest={"کف دست راست - مچ دست راست "}
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
            status={items.paraClinic}
            title={"پاراکلنیک"}
          />
        </div>
        <SearchBoxFull />
        <div className="w-full h-max flex flex-col gap-5 mb-6">
          {selectItem == "پزشک" ? <ParaClinicDr /> : <ParaClinicPC />}
        </div>
      </div>
    </>
  );
}
