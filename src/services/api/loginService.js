import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import Cookies from "js-cookie"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getInformationUser } from "../../slices/loginSlice"

export default function loginService () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const switchUrlLoginPost = (role) => {
        switch(role) {
            case "doctor": return "https://api.tda24.ir/doctors/doctor/login/"
        }
    }
    const switchUrlLogin = (role) => {
        switch(role) {
            case "doctor": return "/doctor/profile"
        }
    }
    const login = async ({role, nationalCode, password}) => {
            console.log(role, nationalCode, password)
            const response = await axios.post(switchUrlLoginPost(role), {role: role, nationalCode: nationalCode, password: password});
            return response;
        }
    const loginMutation  = useMutation({
        mutationFn: login,
        onSuccess: (res) => {
            if(res.data && res.data.token) {
                const {access, refresh} = res?.data?.token;
                Cookies.set("accessToken", access, {expires: 1761075419});
                Cookies.set("refreshToken", refresh, {expires: 1761939419});
                dispatch(getInformationUser({user: res?.data?.user}))
                navigate(switchUrlLogin(res?.data?.user?.role))
            }
        }, 
        onError: (err) => {
            console.log(err)
        }
    })
    return {loginMutation}
}