import { BiStar } from "react-icons/bi";

export default function CommentItem({doctor, expertise, patient, time}) {
    return (
        <div className="w-full h-max md:h-[124px] bg-white rounded-[20px]">
            <div className="w-full h-max flex flex-col md:flex-row items-center">
                <div className="flex flex-row items-center">
                    <span>{doctor}</span>
                    <span>{expertise}</span>
                </div>
                <div className="flex flex-row items-center">
                    <span>{patient}</span>
                    <span>{"مشاوره متنی"}</span>
                </div>
                <div className="flex flex-row items-center">
                    <div className="flex flex-row items-center justify-center gap-1">
                        <BiStar size={11}/>
                        <BiStar size={11}/>
                        <BiStar size={11}/>
                        <BiStar size={11}/>
                        <BiStar size={11}/>
                    </div>
                    <span>{}</span>
                </div>
            </div>
        </div>
    )
}