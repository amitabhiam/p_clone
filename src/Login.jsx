

const Login = () => {
  return (
    <div className="flex justify-center">
        <div className="w-[400px] h-[800px]">
            <img src="https://advancelam.com/wp-content/uploads/2022/08/102.jpg" alt="" />
        </div>

        <div>
            <label>Emp Id</label>
            <div className="">
                <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                />
            </div>

            <label>Password</label>
            <div className="">
                <input
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                />
            </div>

            <div className="">
                <input
                    type=""
                    placeholder="Enter Captcha"
                    id="password"
                />
            </div>
        </div>
        
    </div>
    
  )
}

export default Login