import { useState } from "react";
import { ItemButton,ListItemButton } from "../generalComponent/ItemButton";
import { PiPlus } from "react-icons/pi";
import LaboratoryItems from "./LaboratoryItems";


export default function LaboratoryItem() {
    const tests = ["سی بی سی", "هورمونی", "هورمونی", "هورمونی", "هورمونی", "هورمونی"]
    const [selected, setSelected] = useState(0);
    const getSelected = (key) => {
      setSelected(key);
    }
    return (
        <div className="w-full h-max flex flex-col items-center gap-[18px] mb-20">
            <div className=" w-full flex flex-row gap-2 items-center">
                <div className="w-[90%] md:w-max h-10 flex flex-row items-center gap-2 overflow-x-scroll">
                  {
                    tests.map((test, index) => <ListItemButton key={index} index={index} title={test} selected={selected} onClick={getSelected}/>)
                  }
                </div>  
                <ItemButton>
                  <PiPlus size={24}/>
                </ItemButton>
            </div>
            <div className="w-full h-max flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
              <div className="w-full md:w-1/4 flex flex-row justify-between items-center">
                <span>تنظیمات</span>
                <div className="w-max flex flex-row items-center gap-2">
                  <ItemButton title={"غیر فعال"}/>
                  <ItemButton>
                    <PiPlus size={24}/>
                  </ItemButton>
                </div>
              </div>
              <div className="w-full md:w-[70%] py-[4.8px] px-3 border border-[#909090] rounded-[15px] text-[#676767] text-[14px] leading-6 overflow-hidden line-clamp-2 md:line-clamp-1">معرفی : ثکححکسح تعه اا ا اا ا هتخ تهغعل فبلع هختئف76 ت 78غ 78تخ حون حخ 78فغ 768ا خ ت98 غ 78غ ع</div>
            </div>
            <div className="w-full flex flex-col gap-3 items-center">
              <LaboratoryItems name={"CBC"} price={"450000"} explain={"توضیحات : مجموعه آزمایشات روتین و یسب ربید ب خون آزمایشات روتین و یسب ربید ب خون آزمایشات روتین و یسب ربید ب خون"}/>
              <LaboratoryItems name={"CBC"} price={"450000"} explain={"توضیحات : مجموعه آزمایشات روتین و یسب ربید ب خون آزمایشات روتین و یسب ربید ب خون آزمایشات روتین و یسب ربید ب خون"}/>
            </div>
        </div>
    )
}