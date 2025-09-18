export default function SubmitButton({title, onClick, additionalStyle, disabled=true}) {
    return (
        <button type="submit"
            className={`w-full h-14 rounded-2xl vazir-medium border flex items-center justify-center text-[16px] ${additionalStyle}`} 
            onClick={onClick}
            disabled={disabled}
        >{title}</button>
    )
}