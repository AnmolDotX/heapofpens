'use client'
import { Provider } from "react-redux";
import { makeStore } from "./store";
import { useRef } from "react";

const StoreProvider = ({children}) => {
    const storeRef = useRef();
    if(!storeRef.current) {
        storeRef.current = makeStore()
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    );
}

export default StoreProvider;