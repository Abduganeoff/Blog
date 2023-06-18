import React, { createContext, useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Conext = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Conext.Provider value={{ state, ...boundActions }}>
        {children}
      </Conext.Provider>
    );
  };

  return { Conext, Provider };
};
