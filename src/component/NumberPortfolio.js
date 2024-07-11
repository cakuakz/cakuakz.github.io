import { useEffect, useState } from "react";

const NumberPortfolio = ({ title, number, key }) => {

    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        const endValue = number;
        const increment = endValue / 80;

        let interval = setInterval(() => {
            setCurrentValue(prevValue => {
                const newValue = prevValue + increment;
                return newValue >= endValue ? endValue : newValue;
            });
        }, 25);

        setTimeout(() => {
            clearInterval(interval);
            setCurrentValue(endValue);
        }, 2000);

        return () => clearInterval(interval);
    }, [number]);

    return ( 
        <div className="flex flex-col justify-items-center text-center mb-32" key={key} data-aos="fade-up">
            <h1 className="text-[#404040] text-9xl font-medium">{Math.round(currentValue)}</h1>
            <p className="text-[#a59c95] text-base">{title}</p>
        </div>
     );
}
 
export default NumberPortfolio