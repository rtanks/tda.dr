export function PackagePictureItems({image, title, index, selected, onClick}) {
    return (
        <div className={`w-[117px] h-[152px] flex shrink-0 justify-center ${index == selected? "opacity-100": "opacity-50"}`}>
            <img src={image} alt={title} className="w-full h-full" onClick={onClick}/>
        </div>
    )
}
export function AddPackagePictureItems({title, children, onClick}) {
    return (
        <div className="w-[117px] h-[152px] shrink-0 flex flex-col gap-2 justify-center">
            <button onClick={onClick} type="file" className="w-full h-[84%] rounded-xl flex flex-row gap-1 whitespace-nowrap items-center justify-center bg-gray-200 text-[#676767]">
                {children}
            </button>
            <span className="w-full h-[16%]">{title}</span>
        </div>
    )
}