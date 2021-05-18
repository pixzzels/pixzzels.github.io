// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState } from 'react';

export const ClimateContext = createContext();

export const useTemperature = () => useContext(ClimateContext);
export const useHumidity = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
    const [temperature, setTemperature] = useState(50);
    const [humidity, setHumidity] = useState(40);
    const [changeTemp, setChangeTemp] = useState(50);
    const [changeHumidity, setChangeHumidity] = useState(40);

    return (
        <ClimateContext.Provider value={{ temperature, setTemperature, humidity, setHumidity, changeTemp, setChangeTemp, changeHumidity, setChangeHumidity}}>
            {children}
        </ClimateContext.Provider>
    )
}