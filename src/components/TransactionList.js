// src/components/TransactionList.js
import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type === 'income' ? '+' : '-'}
            {transaction.amount} ({transaction.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
