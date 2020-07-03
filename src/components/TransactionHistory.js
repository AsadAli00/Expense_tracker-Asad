import React,{useContext} from 'react';


//import Transaction
import {Transaction} from './Transaction'
//Import the Global context
import {GlobalContext} from '../context/GlobalState'

export const TransactionHistory = () => {

    const {transactions} = useContext(GlobalContext);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                
                {transactions.map(
                    transaction => (
                        <Transaction transaction={transaction} />
                    )   
                )}
               

            </ul>

        </div>

    )
}