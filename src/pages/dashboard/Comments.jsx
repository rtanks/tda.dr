import CommentItem from "../../components/dashboard/CommentItem";

export default function Comments() {
    return (
        <div className="w-full h-max flex flex-col mt-5 gap-5 bg-transparent">
            <CommentItem doctor={"پزشک اشکان حسنوندی"} expertise={"متخصص جراحی عمومی"} patient={"بیمار شکان حسنوندی"} service={"مشاوره متنی"} 
            time={"14:45"} date={"1404/12/01"} text={"ثصقسیزطظ زیبسثصسی ثشصسیزکج ثمسحج .محم.حغتقمفثحجثسم . طح.ب.سز"}/>

            <CommentItem doctor={"پزشک اشکان حسنوندی"} expertise={"متخصص جراحی عمومی"} patient={"بیمار شکان حسنوندی"} service={"مشاوره متنی"} 
            time={"14:45"} date={"1404/12/01"} text={"ثصقسیزطظ زیبسثصسی ثشصسیزکج ثمسحج .محم.حغتقمفثحجثسم . طح.ب.سز"}/>
            
            <CommentItem doctor={"پزشک اشکان حسنوندی"} expertise={"متخصص جراحی عمومی"} patient={"بیمار شکان حسنوندی"} service={"مشاوره متنی"} 
            time={"14:45"} date={"1404/12/01"} text={"ثصقسیزطظ زیبسثصسی ثشصسیزکج ثمسحج .محم.حغتقمفثحجثسم . طح.ب.سز"}/>
        </div>
    )
}