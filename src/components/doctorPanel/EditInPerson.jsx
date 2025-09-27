import TestHeader from "../generalComponent/HeaderTest";

export default function EditInPerson({goBack, onClick}) {
    return (
        <div className="w-full h-full bg-white vazir-medium fixed left-0 top-0 z-50 overflow-y-scroll">
            <div className="w-[402px] h-[89%] mx-auto">
                <TestHeader title={"ویرایش"} onClick={() => goBack()}/>
                
            </div>
        </div>
    )
}