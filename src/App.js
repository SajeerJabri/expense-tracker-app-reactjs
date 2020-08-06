import React from 'react';
import './App.css';
import BalanceText from './balanceText';
import History from './History';
import Transaction from './Transaction';
import {TransactionProvider} from './transactionData';

function App() {
  return (
    <div className="background"> 
      <div className="main-div">
        <TransactionProvider>
          <BalanceText />
          <History />
          <Transaction />
        </TransactionProvider>
      </div>
    </div>
  );
}

export default App;
