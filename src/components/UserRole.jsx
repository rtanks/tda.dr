import { useState } from "react";
import Role from "./Role";

export default function UserRole({getRole}) {
    const [roleSelected, setRoleSelected] = useState("");
    const roles = [{fa:"پزشک", en: "doctor"},{fa:"پرستار", en: "nurse"},{fa:"آزمایشگاه", en: "laboratory"},{fa:"تصویر برداری", en: "image"},{fa:"پیک", en: "courier"}];

    const getRoleSelected = (role) => {
        setRoleSelected(role)
        getRole(role)
    }
    return (
        <div className="w-full mt-5 flex flex-row flex-wrap gap-2 mb-3">
            {
                roles.map((role, index) => <Role key={index} role={role} roleSelected={roleSelected} getRoleSelected={getRoleSelected}/>)
            }
        </div>
    )
}