import { useEffect, useState } from "react";



const Captcha = ({ onCaptchaValidation }) => {

    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        generateNumbers();
      }, []);

      const generateRandomNumber = () => {
        return Math.floor(Math.random() * 900) + 100; // Generates a random 3-digit number
      };
    
      const generateNumbers = () => {
        const newNumbers = Array.from({ length: 3 }, () => generateRandomNumber());
        setNumbers(newNumbers);
      };
    
      const handleNumberClick = (clickedNumber) => {
        const maxNumber = Math.max(...numbers);
        if (clickedNumber === maxNumber) {
            onCaptchaValidation(true);
            // alert("Captcha passed!");
            generateNumbers(); // Generate new numbers for the next captcha
        } 
        else {
            onCaptchaValidation(false);
            // alert("Incorrect! Try again."); // You can replace this with your logic for a failed captcha
        }
      };

      const renderRandomNumber = () => {
        return (
        
          <div className="flex gap-4">
            {numbers.map((number, index) => (
              <div
                key={index}
                className="border-[1px] border-red-500"
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


