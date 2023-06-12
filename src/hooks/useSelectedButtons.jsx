import { useState } from 'react'

const useSelectedButtons = (options) => {
    
    const [selectedButtons, setSelectedButtons] = useState([]);
    
    const handleButtonClick = (option) => { 
        selectedButtons.includes(option) 
        ? setSelectedButtons(selectedButtons.filter((item) => item !== option))
        : setSelectedButtons([...selectedButtons, option]);

        if (option === 'TODOS'){
            selectedButtons.length === options.length 
            ? setSelectedButtons([]) 
            : setSelectedButtons([...options]);
        }
    };
    return { selectedButtons, handleButtonClick };
}

export default useSelectedButtons;