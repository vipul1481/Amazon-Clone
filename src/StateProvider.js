// creating global variable that can be passed around in a React APP. 
// Instead of passing props from grandparents to parent to child
//Setup data layer
// We need this to track the basket

import { createContext, useReducer ,useContext} from "react";

//This is THE Data Layer
export const StateContext = createContext();

// Build A  Provider
export const StateProvider = ({reducer, initialState, children }) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);