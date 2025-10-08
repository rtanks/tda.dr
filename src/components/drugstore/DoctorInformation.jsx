import RadarCircle from "../generalComponent/Radar";
import DoctorOne from "../../assets/images/پزشک زن.jpg";
import { BiStar } from "react-icons/bi";
import {transformFormat,transformFormatWithSpread} from '../../services/func/transformFunc'

export default function DoctorInformation() {
    return (
        <div className="w-full h-max flex flex-col gap-[7px] vazir-medium">
            <div className="w-full h-max flex flex-row justify-between relative">
                <div className="w-full md:w-max flex flex-col md:flex-row gap-5">
                    <div className="relative">
                        <RadarCircle />
                         <div className="w-[76px] h-[76px] border border-blue-400 rounded-full">
                             <img className="h-full rounded-full w-full" src={DoctorOne}></img>
                         </div>
                    </div>
                    <div className="w-full md:w-max flex flex-row justify-between gap-5 items-center md:items-start">
                        <div className="w-max h-max flex flex-col">
                            <span className="text-black text-[15px]">مرکز تصویر برداری نور</span>
                            <span className="text-[#676767] text-[13px]">اشکان حسنوندی</span>
                        </div>
                        <button type="button" className="w-[84px] h-10 bg-[#e9e9e9] text-[#676767] rounded-[10px]">غیر فعال</button>
                    </div>
                </div>
                <div className="w-[236px] h-max mt-1 flex flex-row gap-[10px] absolute left-0 top-0">
                    <div className="w-[71px] flex flex-col gap-[6px] items-center justify-center">
                        <div className="w-full h-7 flex flex-row justify-center items-center text-[#FF9E33] text-sm bg-[#FF9E333f] rounded-[5px]">
                            {transformFormat(4.8)}
                            <BiStar size={14}/> 
                        </div>
                        <span className="text-xs text-[#676767]">از {transformFormatWithSpread(7120)} امتیاز</span>
                    </div>
                    <div className="w-[71px] flex flex-col gap-[6px] items-center justify-center">
                        <div className="w-full h-7 flex flex-row justify-center items-center text-[#006ECF] text-sm bg-[#006ECF3f] rounded-[5px]"> {transformFormatWithSpread(11000)}+</div>
                        <span className="text-xs text-[#676767]">از {transformFormatWithSpread(7120)} امتیاز</span>
                    </div>
                    <div className="w-[71px] flex flex-col gap-[6px] items-center justify-center">
                        <div className="w-full h-7 flex flex-row justify-center items-center text-sm text-[#676767] bg-[#F2F2F2] rounded-[5px]">{transformFormat(1854654)}</div>
                        <span className="text-xs text-[#676767]">نظام پزشکی</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}