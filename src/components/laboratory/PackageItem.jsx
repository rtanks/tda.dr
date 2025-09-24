import { useState } from "react";
import SearchBoxFull from "../generalComponent/SearchBoxFull";
import { ItemButton, ListItemButton } from "../generalComponent/ItemButton";
import { PiPlus } from "react-icons/pi";
import { IoCloseCircleOutline } from "react-icons/io5";
import generalCheckUp from "../../assets/images/Group 3512.png"
import hormonal from "../../assets/images/Group 3513.png"
import liverAndDigestion from "../../assets/images/Group 3514.png"
import cardioVascular from "../../assets/images/Group 3517.png"
import diabetes from "../../assets/images/Group 3516.png"
import safe from "../../assets/images/Group 3515 (1).png"
import { AddPackagePictureItems, PackagePictureItems } from "./PackagePictureItams";

export default function PackageItem() {
    const images = [{image: generalCheckUp, title: "چکاپ عمومی"},
         {image: hormonal, title: "هورمونی"}, 
         {image: liverAndDigestion, title: "کبد و گوارش"}, 
         {image: cardioVascular, title: "قلب و عروق"}, 
         {image: diabetes, title: "دیابت و متابولیک"}, 
         {image: safe, title: "ایمنی و خود ایمنی"}]

    const tests = ["چکاپ عمومی", "سلامت مردان", "چکاپ قلب و عروق", "سلامت زنان", "سلامت کودکان", "دیابت", "پیشگیری و سلامت"]
    const [selected, setSelected] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);
    const getSelected = (key) => {
      setSelected(key);
    }
    const getSelectedImage = (key) => {
      setSelectedImage(key);
    }
    return(
        <div className="w-full h-max flex flex-col items-center gap-[18px] mb-20">
            <div className="w-full h-[155px] flex flex-row gap-2 items-center overflow-x-scroll">
                {
                    images.map((item, index) => <PackagePictureItems key={index} index={index} selected={selectedImage} title={item.title} image={item.image} onClick={() => getSelectedImage(index)}/>)
                }
                <AddPackagePictureItems title={"افزودن مورد جدید"}>
                    <PiPlus size={24}/>
                </AddPackagePictureItems>
            </div>
            <div className="w-full flex flex-row gap-2 items-center">
                <div className="w-[90%] md:w-max h-10 flex flex-row items-center gap-2 overflow-x-scroll">
                  {
                    tests.map((test, index) => <ListItemButton key={index} index={index} title={test} selected={selected} onClick={getSelected}/>)
                  }
                </div>  
                <ItemButton>
                  <PiPlus size={24}/>
                </ItemButton>
            </div>
            <div className="w-full">
                <SearchBoxFull/>
            </div>
            <div className="w-full flex flex-row gap-2">
                <ItemButton title={"CBC"} style={"gap-7 text-[14px]"}>
                    <IoCloseCircleOutline size={24}/>
                </ItemButton>
                <ItemButton title={"CBC"} style={"gap-7 text-[14px]"}>
                    <IoCloseCircleOutline size={24}/>
                </ItemButton>
            </div>
        </div>
    )
}