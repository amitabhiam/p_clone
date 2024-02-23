
const LoginButtton = ({handleLogin}) => {
    return (
    <div>
        <button 
            onClick={handleLogin}
            className="bg-[#070562] text-[#F6F6F6] w-[324px] h-[44px] rounded-md">Login</button>
    </div>
    )
}

export default LoginButtton;