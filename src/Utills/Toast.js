import { toast } from "react-toastify"

const toastFailure=(message)=>{
    console.log(message);
    toast.error(message);

};

export {toastFailure};