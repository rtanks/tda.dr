import { useState } from "react";

export default function useSpecialLoginServices() {
    const [info, setInfo] = useState({
        nationalCode: {value: null, error: null},
        password: {value: null, error: null}
    });

    const checkNationalCode = (e) => {
        if(e.target.value.length == 10) {
            setInfo(prev => ({...prev, nationalCode: {value: e.target.value, error: null}}))
        } else {}
    }
    const checkEmptyPassword = (e) => {
        if(e.target.value != "") {
            setInfo(prev => ({...prev, password: {value: e.target.value, error: null}}))
        }
    }
    const disabledChecker = () => {
        if((info.password.value && info.nationalCode.value) == null) {
            return false;
        } else {
            return true;
        }
    }

    return {disabledChecker, checkNationalCode, checkEmptyPassword}
}