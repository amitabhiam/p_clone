import { Link } from "react-router-dom";
import LoginButtton from "./LoginButtton"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getLoginDetails} from "./Store/Slice/authSlice";




const Login = () => {

    const selector = useSelector((state) => state.auth.userId);
    console.log(selector);

    const dispatch = useDispatch();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // if (userId === 'amitabh' && password === 'password') {
        //     dispatch(loginSuccess({userId}));
        // } 
        // else {
        //     dispatch(loginFailure({error: 'invalid credential'}));
        // }

        dispatch(getLoginDetails(userId, password));
    };

   
    return (
    <div className="flex h-[100vh] w-[100%]">
        <div className="w-[60%] h-[auto] ml-0">
            <img src="/images/Login.jpeg" alt="" className="w-[100%]"/>
        </div>

        <div className="flex flex-col items-center w-[40%]  mt-[128px] ">
            <div className="text-[32px] text-[#868484] font-bold ">
                Logo
            </div>
            <div className="text-[36px] font-extrabold">Welcome Back!</div>
            <div className="flex mx-[114px] text-[20px] font-normal text-center mt-3">To begin this journey, tell us what type of
    account you’d be assigned.</div>
    <div className="mt-[77px]">
    <div className="text-[20px] text-[#000000] font-normal text-start">
    Emp Id
    </div>
    <div className="">
        <input
        type="text"
        className="border-2 border-black rounded-md p-2 w-[324px]"
        placeholder="Enter Id"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
    />
            </div>
            <div className="text-[20px] text-[#000000] font-normal text-start mt-[21px]">
    Password
    </div>
    <div className="">
        <input
        type="password"
        className="border-2 border-black rounded-md p-2 w-[324px]"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
            </div>
    <div className="flex mt-[52px] items-center justify-center w-[324px] gap-3">
            <div className=" flex bg-[#F3EEF5] border-2   h-[44px] rounded-md items-center ">
                <div className="font-normal text-[20px] tracking-[8px] px-[38px] ">673490</div>
            </div>
            <div>Captcha</div>
            </div>
            <div className="">
        <input
        type="password"
        className="border-2 border-black rounded-md p-2 w-[324px] mt-[30px]"
        placeholder="Enter Captcha"
    />
            </div>
            <div className="flex mt-[25px]">
            <div><input type="checkbox" className="mr-[10px]" /></div>
                <div className="text-[15px] font-semibold">I agree to terms & condition</div>
            </div>
            </div>

            <div>
                <LoginButtton handleLogin = {handleLogin} />
            </div>
            
            <div className="text-[#070562] ">
            <Link to='/forgot-password'>
            
                ForgotPassword ? 
            </Link>
            </div>
            


        </div>
    </div>

    )
}

export default Login