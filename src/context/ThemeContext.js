import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("night");

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        setThemeName
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/**
  first is we need to create/initiate the information somehow
    - single source of truth
- we tell our program that we want to make it available in multiple places
  - create the context.Provider component, and have it track the "single source of truth" info from ear ||
  - we have to encapsulate all the parts of our app that we want to give this information to 
- using that information
  - useContext to create an api to access the context information
  - we can then use that custom function from any component nested under our provider to access the info ||

 */

/*
take in two arguments
  - callback function - to be used after the render
  - array - dependencies, if any of these dependencies change, we should re run the hook callback function

  useEffect(() => {
    // fetch("url", data)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [readyToFetch]) // we know this runs once
  // we know it runs the first time a coponent gets rendered

*/