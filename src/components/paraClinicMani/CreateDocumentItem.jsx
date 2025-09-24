export default function CreateDocumentItem({title}) {
    return (
        <div className="w-[116px] h-[133px] flex flex-col justify-end rounded-[15px] items-center vazir-medium border border-[#909090]">
            <div className="text-[#909090] text-[16px] py-5">{title}</div>
        </div>
    )
}