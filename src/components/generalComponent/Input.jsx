export default function Input({placeholder, type, mode, onChange}) {
    return (
        <input
            type={type} 
            placeholder={placeholder}
            inputMode={mode} 
            onChange={onChange} 
            className="w-full h-13 rounded-2xl vazir-medium text-gray-500 border border-gray-500 px-5 mt-2"
        />
    )
}