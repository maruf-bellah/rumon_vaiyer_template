// import { checkPropTypes } from "prop-types";
// import { useMemo } from "react";
// import { useContext } from "react";
// import { useReducer } from "react";
// import { createContext } from "react";

// const MaterialUI = createContext();

// MaterialUI.displayName = "MaterialUIContext";

// function reducer(state, action) {
//   switch (action.type) {
//     case "DARKMODE": {
//       return { ...state, darkMode: action.value };
//     }
//   }
// }

// function MaterialUIControllerProvider({ children }) {
//   const initialState = {
//     darkMode: true,
//   };
//   const [controller, dispatch] = useReducer(reducer, initialState);
//   const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

//   return <MaterialUI.Provider value={value}> {children}</MaterialUI.Provider>;
// }

// function useMaterialUIController() {
//   const context = useContext(MaterialUI);
//   if (!context) {
//     throw new Error(
//       "useMaterialUIController should be used inside the MaterialUIControllerProvider."
//     );
//   }
//   return context;
// }

// MaterialUIControllerProvider.prototype = {
//   children: checkPropTypes.none.isRequired,
// };

// const setDarkMode = (dispatch, value) => dispatch({ tyep: "DARKMODE", value });

// export { MaterialUIControllerProvider, useMaterialUIController, setDarkMode };
