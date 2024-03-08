import React, { createContext, useContext, useState } from "react"

const countercontext = createContext();

//make custome hook
export const useCounter = () => useContext(countercontext);


//datarape kar rhe hain fir send karege as a props iska data khain bi bhej skte hain
export const CounterProvider = ({ children }) => {

    const [count, setcount] = useState(0)



    const increment = () => {

        //setcount ke ander function banayege for vo count ki purani value ajyegi pre
        setcount((pre) => {
            if (pre > 4) {
                setcount(5)
            }
            return pre + 1;
        });


    }

    const decrement = () => {

        setcount((pre) => {
            if(pre<-4){
                setcount(-5)
            }
            return pre - 1;
        });


    };


    const reset = () => {

        setcount(0);


    };
    return (
        <countercontext.Provider value={{ count, increment, decrement, reset }}>
            {children}
        </countercontext.Provider>
    )
}




