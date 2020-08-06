import React, { createContext,useReducer } from 'react';
import TransactionReducer from './transactionReducer'
const initialData = {
   transactions : []
}

// {amount : +1000, desc : "Salary"},
// {amount : -500, desc : "Camera"}

const TransactionData = createContext(initialData);

export const TransactionProvider=({children})=>{
    let [state, dispatch] = useReducer(TransactionReducer, initialData)

    function addTransaction(transObj)   {
        dispatch({
            type:"ADD_TRANSACTION",
            payload:{
                id : transObj.id,
                amount : transObj.amount,
                 desc : transObj.desc
            }
        })
    }

    function deleteTransaction(id){
        dispatch({
            type : "DELETE_TRANSACTION",
            payload : id
        });
    }
    
    return(
        <TransactionData.Provider value={{
            transactions : state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionData.Provider>
    )
}

export default TransactionData;