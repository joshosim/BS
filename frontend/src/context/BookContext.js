import React, { createContext, useReducer } from "react";

export const BookContext = createContext();

export const bookReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return { books: [action.payload, ...state.books] };
        case "DELETE_BOOK":
            return {
                books: state.books.filter((b) => b._id !== action.payload._id),
            };
        case "UPDATE_BOOK":
            return {};
        default:
            return state;
    }
};

export const BookContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(bookReducer, { books: null });
    return (
        <BookContext.Provider value={{ ...state, dispatch }}>
            {children}
        </BookContext.Provider>
    );
};
