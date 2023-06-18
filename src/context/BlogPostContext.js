import createContext from "./createContext";

const reducer = (state, action) => {};

export const { Context, Provider } = createContext(reducer, {}, []);
