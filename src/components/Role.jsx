export default function Role({role, roleSelected, getRoleSelected}) {
    const selectRole = (e) => {
        getRoleSelected(e.target.title)
    }
    return(
        <button type="button" 
            onClick={(e) => selectRole(e)} 
            title={role} 
            className={`px-[14px] py-[7px] vazir-medium text-[16px] font-bold rounded-[10px] ${roleSelected === role? "bg-[#E6F3FF] text-[#006ECF]" : "bg-gray-200 text-gray-500"}`}
            >{role}</button>
    )
}