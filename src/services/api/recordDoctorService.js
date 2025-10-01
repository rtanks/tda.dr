import axios from "axios";
import {useMutation} from "@tanstack/react-query";

export default function recordDoctorService() {
    const recordDoctor = async ({fullName, phoneNumber, nationalCode}) => {
        const response = await axios.post("https://api.tda24.ir/doctors/doctor/register/", {fullName: fullName, phoneNumber: phoneNumber, nationalCode: nationalCode});
        return response;
    }
    const recordDoctorMutation = useMutation({
        mutationFn: recordDoctor,
        onSuccess: (res) => {
            console.log(res)
        }, 
        onError: (err) => {
            console.log(err)
        }
    })
    return {recordDoctorMutation}
}