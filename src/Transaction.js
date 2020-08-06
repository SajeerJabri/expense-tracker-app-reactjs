import React, {useState, useContext} from 'react';
import './Transaction.css';
import TransactionData from './transactionData';

const Transaction =()=>{
    const {addTransaction} = useContext(TransactionData);
    const [data, setData] = useState({
        desc: '',
        amount: ''
    });
    const formSubmit=(evt)=>{
        evt.preventDefault();
        addTransaction({
            id : Math.floor(Math.random() * 100000),
            desc: data.desc,
            amount: data.amount
        })
        setData({
        desc: '',
        amount: ''
        })
        
    };

    const handleChange=(event)=>{
        const value = event.target.value;
        setData({
          ...data,
          [event.target.name]: value
        });
      };

    return(
        <div className="transaction">
            <h4>Add new Transaction</h4>
            <hr></hr>
            <form className="trans-form" onSubmit={formSubmit} >
                <label htmlFor="text">Text :
                <input type="text" name="desc" value={data.desc} onChange={handleChange} required placeholder="Enter Text" />
                </label>
                <label htmlFor="amount">Amount(negative-expense,positive-income) :
                <input type="number" name="amount" value={data.amount} onChange={handleChange} required placeholder="Enter Amount" />
                </label>
                <input type="submit" className="input-btn" value="Add Transaction"/>
            </form>
        </div>
    );  
};

export default Transaction;