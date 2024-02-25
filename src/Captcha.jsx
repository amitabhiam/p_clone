import { useEffect, useState } from "react";
import { toastFailure } from "./Utills/Toast";



const Captcha = ({ onCaptchaValidation }) => {

    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        generateNumbers();
      }, []);

      const generateRandomNumber = () => {
        return Math.floor(Math.random() * 900) + 100; 
      };
    
      const generateNumbers = () => {
        const newNumbers = Array.from({ length: 3 }, () => generateRandomNumber());
        setNumbers(newNumbers);
      };
    
      const handleNumberClick = (clickedNumber) => {
        onCaptchaValidation(clickedNumber === Math.max(...numbers));
        const maxNumber = Math.max(...numbers);
        if (clickedNumber === maxNumber) {
           
            onCaptchaValidation(true);

            //generateNumbers(); 
        } 
        else {
            onCaptchaValidation(false);
        }
      };

      const renderRandomNumber = () => {
        return (
        
          <div className="flex gap-4">
            {numbers.map((number, index) => (
              <div
                key={index}
                className={`border-[1px] border-red-500S`}
                onClick={() => handleNumberClick(number)}
              >
                {number}
              </div>
            ))}
          </div>
        );
      };


      return (
        <div>
            {renderRandomNumber()}
        </div>
      )

};

export default Captcha;


