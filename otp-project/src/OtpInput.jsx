import React, { useEffect, useRef, useState } from 'react'

const OtpInput = () => {
    const inputRefs = useRef([]);
    const [otp, setOtp] = useState(new Array(6).fill(''));

    // auto focus the first box
    useEffect(() => {
        inputRefs.current[0].focus();
    }, [])

    const handleChange = (e, index) => {
      const value = e.target.value;

      // Only allow single digit
      if (!/^[0-9]$/.test(value)) return;

      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // move to next input
      if(index < otp.length-1){
        inputRefs.current[index+1].focus();
      }
    };

    const handleKeyDown = (e, index) => {
        if(e.key === 'Backspace'){
            const newOtp = [...otp]; // copy of the current otp array bcoz in react we should never directly change the state, we work on a copy then update it using setOtp().
            if(otp[index] === ''){
                // move back only if box is empty
                if(index > 0){
                    inputRefs.current[index-1].focus();
                }
            } else {
                // clear the current value
                newOtp[index] = '';
                setOtp(newOtp);
            }
        }
    }




  return (
    <div>
      {otp.map((digit, index) => (
        <input
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            fontSize: "20px",
          }}
          key={index}
          type="text"
          value={digit}
          maxLength="1"
          ref={(el) => (inputRefs.current[index] = el)} // Stores the input element reference for later focus control.
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
}

export default OtpInput