import TestHeader from "../generalComponent/HeaderTest";
import FinancialHistorySubItem from "./FinancialHistorySubItem";


export default function FinancialHistoryDrawer({onClick}) {
    
    return (
        <div className="w-full h-full bg-white vazir-medium fixed left-0 top-0 z-50 overflow-y-scroll">
            <div className="w-[402px] mx-auto h-max">
                <TestHeader title={"سابقه مالی"} onClick={onClick}/>
                <div className="w-[90%] relative h-max mx-auto flex flex-col gap-5 mb-5">
                   <FinancialHistorySubItem price={"845000000"} shaba={"87634548633553563453"} trackingCode={"452145221"} status={"موفق"}
                    explain={"عیفغغ  ثقفهن صث نهق6 شصثی  فبغ6فس صث ضت6 8قعفی س4 فشف"} create={"1404/08/12  14:45"} done={"1404/08/12  14:45"}/>
                   <FinancialHistorySubItem price={"845000000"} shaba={"87634548633553563453"} trackingCode={"452145221"} status={"موفق"}
                    explain={"عیفغغ  ثقفهن صث نهق6 شصثی  فبغ6فس صث ضت6 8قعفی س4 فشف"} create={"1404/08/12  14:45"} done={"1404/08/12  14:45"}/>
                </div>
            </div>
        </div>
    )
}