import { useState } from "react";
import Role from "./Role";

export default function UserRole({roles}) {
    const [roleSelected, setRoleSelected] = useState("");

    const getRoleSelected = (role) => {
        setRoleSelected(role)
        console.log(role)
    }
    return (
        <div className="w-full mt-5 flex flex-row flex-wrap gap-2 mb-3">
            {
                roles.map((role, index) => <Role key={index} role={role} roleSelected={roleSelected} getRoleSelected={getRoleSelected}/>)
            }
        </div>
    )
}