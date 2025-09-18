export default function InputWithLabel({label, type, placeholder, onChange}) {
    return (
        <div className="w-full h-max flex flex-col gap-1 font-bold">
            <label className="w-full">{label}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                className="w-full h-13 rounded-2xl vazir-medium outline-black bg-[#f9f9f9] text-gray-500 placeholder:text-[#757575] border border-[#e3e3e3] px-5 mt-2"
            />
        </div>
    )
}