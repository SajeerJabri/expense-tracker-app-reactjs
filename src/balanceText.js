import React, {useContext} from 'react';
import './balanceText.css';
import TransactionData from './transactionData';


function BalanceText() {
const {transactions} = useContext(TransactionData);
const amount = transactions.map(transac=>parseInt(transac.amount))
  const getIncome=()=>{
    let income = 0;
    for(var i=0; i < amount.length; i++){
        if(amount[i] > 0){
          income += amount[i];
        }
        
    }
    return income;
}
const getExpense=()=>{
  let expense = 0;
  for(var i=0; i < amount.length; i++){
      if(amount[i] < 0){
        expense += amount[i];
      }
  }
  return expense;
}
  return (
    
    <div>
      <div className="main-text">
      <h3>Expense Tracker</h3>
      <h4>Your Balance</h4>
      <h3>{getIncome() + getExpense() < 0 ? '-' : ''}${Math.abs(getIncome() + getExpense())}.00</h3>
      </div>
      <div className="income-expense">
        <div className="income">
          <span>INCOME</span><br></br>
          <span>${getIncome()}</span>
        </div>
        <hr></hr>
        <div className="expense">
          <span>EXPENSE</span><br></br>
          <span>${Math.abs(getExpense())}</span>
          </div>
        </div>
      </div>
  );
}

export default BalanceText;
