import { createContext, useState } from 'react';
import db from'../db.json'

export const GlobalContext = createContext();

// export function GlobalProvider({ children }) {
//   const [historias, setHistorias] = useState(db.historias);
//   const [dataHistoria, setDataHistoria] = useState();

export function GlobalProvider({ children }) {
    const [historias, setHistorias] = useState([]);
    const [dataHistoria, setDataHistoria] = useState();
  
    const fetchHistorias = async () => {
      try {
          const response = await fetch('https://json-server-vercel-main-phi.vercel.app/historias');
          const data = await response.json();
          setHistorias(data);
      } catch (error) {
          console.error('Error fetching historias:', error);
      }
  };
  fetchHistorias();

  return (
    <GlobalContext.Provider value={{ historias, setHistorias, dataHistoria, setDataHistoria }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};