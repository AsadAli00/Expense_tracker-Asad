import React, {useState ,useContext} from 'react';


//import the global state
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
    const [description,setDiscription] = useState(''); 
    const [transactionAmount,setTransactionAmount] = useState('');

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3> Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" 
                           id="description" 
                           placeholder="Detail of Transaction" 
                           value={description}
                           onChange={(e) => setDiscription(e.target.value)} 
                           required="required"
                    />

                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">Transaction Amount</label>
                    <input type="number" 
                           id="transaction Amount" 
                           placeholder="Enter Transaction amount"
                           value={transactionAmount}
                           onChange={(e) => setTransactionAmount(e.target.value)} required="required"
                    />

                </div>
                <button className="btn">
                    Add transaction
                </button>

            </form>
        </div>

    )
}