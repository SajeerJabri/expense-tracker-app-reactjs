import React, {useContext} from 'react';
import './History.css';
import TransactionData from './transactionData';
import TransactionList from './transactionList';

const History=()=> {
  const {transactions} = useContext(TransactionData);
  return (
    <div className="history">
        <h4>History</h4>
        <hr></hr>
        {transactions.map((transValue,index)=>(<TransactionList key={transValue.id} id={transValue.id} transaction={transValue} />) )}
    </div>
  );
}

export default History;
