import React, {useContext} from 'react';
import TransactionData from './transactionData';

const TransactionList =(props) => {
    const {deleteTransaction} = useContext(TransactionData);
    const sign = props.transaction.amount < 0 ? '-' : '+';
    return (
        <>
            <ul>
            <li className={`history-details ${props.transaction.amount > 0 ? 'plus' : 'minus'}`}>
             <i className="fa fa-times" onClick={()=>{
               deleteTransaction(props.transaction.id)}}></i>
              <span className="items">{props.transaction.desc}</span>
              <span className="price">{sign}${Math.abs(props.transaction.amount)}</span>
            </li>
            </ul>
        </>
    );
}

export default TransactionList;